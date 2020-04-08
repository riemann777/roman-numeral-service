import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "../../RomanNumeralSymbol/RomanNumeralSymbol";

const orderedAtoms = [ Roman.M, Roman.D, Roman.C, Roman.L, Roman.X, Roman.V, Roman.I ];


export const romanNumeralValidator = (romanInput: string) => {

    const inputSymbols = romanInput.split("");

    return /^[MDCLXVI]{1,15}$/.test(romanInput)
        && hasUnderSameConsecutiveLimit(inputSymbols)
        && hasOnlyValidPairs(inputSymbols);

};

const hasUnderSameConsecutiveLimit = ([current, ...rest]: string[], count: number = 1, limit: number = 3): boolean => {

    if (count > limit) {

        return false;
    }

    if (!rest.length) {

        return true;
    }

    return (current === R.head(rest))
        ? hasUnderSameConsecutiveLimit(rest, ++count)
        : hasUnderSameConsecutiveLimit(rest);
};

const hasOnlyValidPairs = ([current, ...rest]: string[]): boolean => {

    if (!rest.length) {

        return true;
    }

    if (!isValidPair(current, R.head(rest) || "")) {

        return false;
    }

    return hasOnlyValidPairs(rest);
};

const isValidPair = (left: any, right: any): boolean =>
    (Roman[left] < Roman[right])
        ? isValidSubtractivePair(left, right)
        : true;

const isValidSubtractivePair = (left: any, right: any, atoms: number[] = orderedAtoms): boolean => {

    const leftArabic: any = Roman[left];
    const rightArabic: any = Roman[right];

    const subtractiveAtomIndex: number = R.indexOf(leftArabic, atoms);

    return !/^[DLV]{1}$/.test(left)
        && (rightArabic === atoms[subtractiveAtomIndex - 1] || rightArabic === atoms[subtractiveAtomIndex - 2]);

};

