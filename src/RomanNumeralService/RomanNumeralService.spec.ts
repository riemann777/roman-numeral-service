import { convertRomanToArabic, convertArabicToRoman } from './RomanNumeralService';
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";

describe("RomanNumeralService", () => {

    test("when asked to convert roman to arabic", () => {

        expect(convertRomanToArabic([ Roman.I ])).toBe(1);
        expect(convertRomanToArabic([ Roman.V ])).toBe(5);
        expect(convertRomanToArabic([ Roman.I, Roman.I ])).toBe(2);
        expect(convertRomanToArabic([ Roman.V, Roman.I ])).toBe(6);
        expect(convertRomanToArabic([ Roman.I, Roman.V ])).toBe(4);
        expect(convertRomanToArabic([
            Roman.M, Roman.M, Roman.M, Roman.C, Roman.M, Roman.X, Roman.C, Roman.I, Roman.X
        ])).toBe(3999);
        expect(convertRomanToArabic([
            Roman.M,
            Roman.M,
            Roman.M,
            Roman.D,
            Roman.C,
            Roman.C,
            Roman.C,
            Roman.L,
            Roman.X,
            Roman.X,
            Roman.X,
            Roman.V,
            Roman.I,
            Roman.I,
            Roman.I
        ])).toBe(3888);
        expect(convertRomanToArabic([ Roman.X, Roman.C, Roman.I, Roman.V ])).toBe(94);
        expect(convertRomanToArabic([
            Roman.M, Roman.M, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
        ])).toBe(3044);
        expect(convertRomanToArabic([
            Roman.M, Roman.M, Roman.C, Roman.C, Roman.C, Roman.L, Roman.X, Roman.V
        ])).toBe(2365);
        expect(convertRomanToArabic([
            Roman.M, Roman.C, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
        ])).toBe(1944);
        expect(convertRomanToArabic([ Roman.I, Roman.X ])).toBe(9);
        expect(convertRomanToArabic([ Roman.C, Roman.D ])).toBe(400);

    });

    test('when asked to convert arabic to roman', () => {

        expect(convertArabicToRoman(1)).toStrictEqual([ Roman.I ]);

    });

});

