import * as R from "ramda";
import { romanConverter, arabicConverter } from "./converters";
import { RomanNumeralSymbol as Roman } from "../RomanNumeralSymbol/RomanNumeralSymbol"

export const convertRomanToArabic = (romanStr: string): number =>
    R.compose(
        romanConverter,
        R.map((romanStr: string): Roman => (<any>Roman)[romanStr])
    )(romanStr.split(""));

export const convertArabicToRoman = (arabicVal: number): string =>
    R.map((arabicAtom: number) => Roman[arabicAtom], arabicConverter(arabicVal)).join("");

