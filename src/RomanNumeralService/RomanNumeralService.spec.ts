import { mocked } from 'ts-jest/utils'
import { convertRomanToArabic, convertArabicToRoman } from './RomanNumeralService';
import { romanConverter, arabicConverter } from "./converters";
jest.mock("./converters");

describe("RomanNumeralService", () => {

    describe("when asked to convert roman to arabic", () => {

        test("should transform input correctly for converter", () => {

            const mockedRomanConverter = mocked(romanConverter, true);

            convertRomanToArabic("MMMCMXCIX");

            expect(mockedRomanConverter).toHaveBeenCalledWith([ 1000, 1000, 1000, 100, 1000, 10, 100, 1, 10 ]);

        });

    });

    describe("when asked to convert arabic to roman", () => {

        test("should transform input correctly for converter", () => {

            const mockedArabicConverter = mocked(arabicConverter, true);

            mockedArabicConverter.mockReturnValue([ 1000, 1000, 1000, 100, 1000, 10, 100, 1, 10 ]);

            expect(convertArabicToRoman(3999)).toBe("MMMCMXCIX");

        });

    });

});

