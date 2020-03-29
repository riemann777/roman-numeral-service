import * as R from "ramda";
import { RomanNumeralSymbol } from "./RomanNumeralSymbol";

export const convertRomanToArabic = (numeralSymbols: RomanNumeralSymbol[]) : number =>
    R.reduceRight((arabicValue: RomanNumeralSymbol, arabicTotal: number) : number =>
        (arabicValue < arabicTotal)
            ? arabicTotal - arabicValue
            : arabicTotal + arabicValue
        , 0, numeralSymbols);