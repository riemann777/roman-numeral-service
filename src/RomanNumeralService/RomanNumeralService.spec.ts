import { convertRomanToArabic } from './RomanNumeralService';
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";

test.only('convertRomanToArabic', () => {

    expect(convertRomanToArabic([ Roman.I ])).toBe(1);
    expect(convertRomanToArabic([ Roman.V ])).toBe(5);
    expect(convertRomanToArabic([ Roman.I, Roman.I ])).toBe(2);
    expect(convertRomanToArabic([ Roman.V, Roman.I ])).toBe(6);
    expect(convertRomanToArabic([ Roman.I, Roman.V ])).toBe(4);


});