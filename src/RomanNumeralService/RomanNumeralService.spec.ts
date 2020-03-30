import { convertRomanToArabic, convertArabicToRoman } from './RomanNumeralService';
import { RomanNumeralSymbol as Roman } from "./RomanNumeralSymbol";

describe("RomanNumeralService", () => {

    describe("when asked to convert roman to arabic", () => {

        test("it converts base symbols", () => {

            expect(convertRomanToArabic([Roman.I])).toBe(1);
            expect(convertRomanToArabic([Roman.V])).toBe(5);
            expect(convertRomanToArabic([Roman.X])).toBe(10);
            expect(convertRomanToArabic([Roman.L])).toBe(50);
            expect(convertRomanToArabic([Roman.C])).toBe(100);
            expect(convertRomanToArabic([Roman.D])).toBe(500);
            expect(convertRomanToArabic([Roman.M])).toBe(1000);

        });

        test("it converts simple additive symbol combinations", () => {

            expect(convertRomanToArabic([Roman.I, Roman.I])).toBe(2);
            expect(convertRomanToArabic([Roman.V, Roman.I])).toBe(6);
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
            expect(convertRomanToArabic([
                Roman.M, Roman.M, Roman.C, Roman.C, Roman.C, Roman.L, Roman.X, Roman.V
            ])).toBe(2365);

        });

        test("it converts simple subractive symbol combinations", () => {

            expect(convertRomanToArabic([Roman.I, Roman.V])).toBe(4);
            expect(convertRomanToArabic([Roman.I, Roman.X])).toBe(9);
            expect(convertRomanToArabic([Roman.C, Roman.D])).toBe(400);

        });

        test("it converts complex symbol combinations", () => {

            expect(convertRomanToArabic([
                Roman.M, Roman.M, Roman.M, Roman.C, Roman.M, Roman.X, Roman.C, Roman.I, Roman.X
            ])).toBe(3999);
            expect(convertRomanToArabic([ Roman.X, Roman.C, Roman.I, Roman.V ])).toBe(94);

            expect(convertRomanToArabic([
                Roman.M, Roman.M, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
            ])).toBe(3044);


            expect(convertRomanToArabic([
                Roman.M, Roman.C, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
            ])).toBe(1944);

        });

    });


    describe("when asked to convert arabic to roman", () => {

        test("it converts to base symbols", () => {

            expect(convertArabicToRoman(1)).toStrictEqual([ "I" ]);
            expect(convertArabicToRoman(5)).toStrictEqual([ "V" ]);
            expect(convertArabicToRoman(10)).toStrictEqual([ "X" ]);
            expect(convertArabicToRoman(50)).toStrictEqual([ "L" ]);
            expect(convertArabicToRoman(100)).toStrictEqual([ "C" ]);
            expect(convertArabicToRoman(500)).toStrictEqual([ "D" ]);
            expect(convertArabicToRoman(1000)).toStrictEqual([ "M" ]);

        });

    });

});

