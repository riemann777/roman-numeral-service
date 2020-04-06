import * as R from "ramda";
import { RomanNumeralSymbol as Roman } from "../../../RomanNumeralSymbol/RomanNumeralSymbol";
import { romanConverter } from "../RomanConverter/RomanConverter";
import { getMagnitude } from "../utils";

const defaultAtoms = [ Roman.M, Roman.D, Roman.C, Roman.L, Roman.X, Roman.V, Roman.I ];

export const arabicConverter = (arabic: number, arabicAtoms: number[] = defaultAtoms) =>
    R.reduce((conversions: any, arabicAtom: any): any =>
        conversions.concat(convertForArabicAtom(arabic - romanConverter(conversions), arabicAtom))
    , [], arabicAtoms);


export const convertForArabicAtom = (arabic: number, arabicAtom: Roman, conversions: Roman[] = []): any =>
    isFullyReducedByAtom(arabic, arabicAtom)
        ? conversions
        : subtractiveNotationRequired(arabic, arabicAtom)
            ? convertForArabicAtom(arabic - arabicAtom, arabicAtom, getSubtractiveConversions(arabicAtom, conversions))
            : convertForArabicAtom(arabic - arabicAtom, arabicAtom, conversions.concat(arabicAtom));

export const isFullyReducedByAtom = (arabic: number, arabicAtom: number): boolean =>
    (arabic - arabicAtom) < -1 * getSubtractiveAtomValue(arabicAtom);

export const subtractiveNotationRequired = (arabic: number, arabicAtom: number): boolean =>
    (arabicAtom !== Roman.I)
    &&
    ((arabic - arabicAtom) >= -1 * getSubtractiveAtomValue(arabicAtom) && (arabic - arabicAtom) < 0);

export const getSubtractiveAtomValue = (arabicAtom: number) =>
    (10 ** (getMagnitude(arabicAtom * 2) -1));

const getSubtractiveConversions = (arabicAtom: number, currentConversions: Roman[]): Roman[] =>
    currentConversions.concat(getSubtractiveAtomValue(arabicAtom)).concat(arabicAtom);