import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";

const defaultAtoms = [ Roman.M, Roman.D, Roman.C, Roman.L, Roman.X, Roman.V, Roman.I ];

export const convertRomanToArabic = (numeralSymbols: Roman[]) : number =>
    R.reduceRight((arabicValue: Roman, arabicTotal: number) : number =>
        shouldSubtract(arabicValue, arabicTotal)
            ? arabicTotal - arabicValue
            : arabicTotal + arabicValue
        , 0, numeralSymbols);

export const convertArabicToRoman = (arabic: number, arabicAtoms: number[] = defaultAtoms) =>
    R.reduce((conversions: any, arabicAtom: any): any =>
        conversions.concat(convertForArabicAtom(arabic - convertRomanToArabic(conversions), arabicAtom))
    , [], arabicAtoms);


export const convertForArabicAtom = (arabic: number, arabicAtom: Roman, conversions: Roman[] = []): any =>
    isFullyReducedByAtom(arabic, arabicAtom)
        ? conversions
        : subtractiveNotationRequired(arabic, arabicAtom)
            ? convertForArabicAtom(arabic - arabicAtom, arabicAtom, conversions.concat(getSubtractiveAtomValue(arabicAtom)).concat(arabicAtom))
            : convertForArabicAtom(arabic - arabicAtom, arabicAtom, conversions.concat(arabicAtom));

export const isFullyReducedByAtom = (arabic: number, arabicAtom: number): boolean =>
    (arabic - arabicAtom) < -1 * getSubtractiveAtomValue(arabicAtom);

export const subtractiveNotationRequired = (arabic: number, arabicAtom: number): boolean =>
    (arabicAtom !== Roman.I)
    &&
    ((arabic - arabicAtom) >= -1 * getSubtractiveAtomValue(arabicAtom) && (arabic - arabicAtom) < 0);

export const getSubtractiveAtomValue = (arabicAtom: number) =>
    (10 ** (getMagnitude(arabicAtom * 2) -1));

const shouldSubtract = (a: number, b: number): boolean =>
    (getMagnitude(a) < getMagnitude(b * 2));


const getMagnitude = (n: number) => {

    const order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);

    return Math.pow(10, order).toString().length - 1;
};

