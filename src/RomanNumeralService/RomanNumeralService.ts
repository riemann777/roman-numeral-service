import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";


export const convertRomanToArabic = (numeralSymbols: Roman[]) : number =>
    R.reduceRight((arabicValue: Roman, arabicTotal: number) : number =>
        shouldSubtract(arabicValue, arabicTotal)
            ? arabicTotal - arabicValue
            : arabicTotal + arabicValue
        , 0, numeralSymbols);

export const shouldSubtract = (a: number, b: number): boolean =>
    (getMagnitude(a) < getMagnitude(b * 2));

export const getMagnitude = (n: number) => {

    const order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);

    return Math.pow(10, order).toString().length - 1;
};


export const convertArabicToRoman = (arabic: number) => {
    // console.log(arabic);
    const arabicAtoms: number[] = [ Roman.V, Roman.I ];//[Roman.M, Roman.D, Roman.C, Roman.L, Roman.X, Roman.V, Roman.I];

    return R.reduce((conversions: any, arabicAtom: any): any => {

        return conversions.concat(convertForArabicAtom(arabic - R.sum(conversions), arabicAtom));

    }, [], arabicAtoms);
};

const convertForArabicAtom = (arabic: number, arabicAtom: Roman, conversions: Roman[] = []): any => {

    return ((arabic - arabicAtom) < 0)
        ? conversions
        : convertForArabicAtom(arabic - arabicAtom, arabicAtom, conversions.concat(arabicAtom))
};