import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";

export const convertRomanToArabic = (numeralSymbols: Roman[]) : number =>
    R.reduceRight((arabicValue: Roman, arabicTotal: number) : number =>
        shouldSubtract(arabicValue, arabicTotal)
            ? arabicTotal - arabicValue
            : arabicTotal + arabicValue
        , 0, numeralSymbols);

const shouldSubtract = (a: number, b: number): boolean =>
    (getMagnitude(a) < getMagnitude(b * 2));

const getMagnitude = (n: number) => {

    const order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);

    return Math.pow(10, order).toString().length - 1;
};


export const convertArabicToRoman = (arabic: number) => {
    // console.log(arabic);
    return [ Roman[arabic] ];
};