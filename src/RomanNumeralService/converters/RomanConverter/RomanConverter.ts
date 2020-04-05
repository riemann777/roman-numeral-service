import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "../../../RomanNumeralSymbol/RomanNumeralSymbol";
import { getMagnitude } from "../utils";

export const romanConverter = (numeralSymbols: Roman[]) : number =>
    R.reduceRight((arabicValue: Roman, arabicTotal: number) : number =>
            shouldSubtract(arabicValue, arabicTotal)
                ? arabicTotal - arabicValue
                : arabicTotal + arabicValue
        , 0, numeralSymbols);

const shouldSubtract = (a: number, b: number): boolean =>
    (getMagnitude(a) < getMagnitude(b * 2));