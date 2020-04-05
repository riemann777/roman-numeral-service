import {
    arabicConverter,
    convertForArabicAtom,
    isFullyReducedByAtom,
    subtractiveNotationRequired,
    getSubtractiveAtomValue
} from './ArabicConverter';
import { RomanNumeralSymbol as Roman } from "../../../RomanNumeralSymbol/RomanNumeralSymbol";


describe("RomanNumeralService", () => {

    describe("when asked to convert arabic to roman", () => {

        test("it converts to base symbols", () => {

            expect(arabicConverter(1)).toStrictEqual([ Roman.I ]);
            expect(arabicConverter(5)).toStrictEqual([ Roman.V ]);
            expect(arabicConverter(10)).toStrictEqual([ Roman.X ]);
            expect(arabicConverter(50)).toStrictEqual([ Roman.L ]);
            expect(arabicConverter(100)).toStrictEqual([ Roman.C ]);
            expect(arabicConverter(500)).toStrictEqual([ Roman.D ]);
            expect(arabicConverter(1000)).toStrictEqual([ Roman.M ]);

        });

        test("it converts simple additive symbol combinations", () => {

            expect(arabicConverter(2)).toStrictEqual([ Roman.I, Roman.I ]);
            expect(arabicConverter(3)).toStrictEqual([ Roman.I, Roman.I, Roman.I ]);
            expect(arabicConverter(6)).toStrictEqual([ Roman.V, Roman.I ]);
            expect(arabicConverter(7)).toStrictEqual([ Roman.V, Roman.I, Roman.I ]);
            expect(arabicConverter(8)).toStrictEqual([ Roman.V, Roman.I, Roman.I, Roman.I ]);
            expect(arabicConverter(11)).toStrictEqual([ Roman.X, Roman.I ]);
            expect(arabicConverter(13)).toStrictEqual([ Roman.X, Roman.I, Roman.I, Roman.I ]);
            expect(arabicConverter(3837)).toStrictEqual([
                Roman.M,
                Roman.M,
                Roman.M,
                Roman.D,
                Roman.C,
                Roman.C,
                Roman.C,
                Roman.X,
                Roman.X,
                Roman.X,
                Roman.V,
                Roman.I,
                Roman.I
            ]);

        });

        test("it should know when to stop reducing arabic number by atom", () => {

            expect(isFullyReducedByAtom(0, 5)).toBe(true);
            expect(isFullyReducedByAtom(0, 1)).toBe(true);
            expect(isFullyReducedByAtom(461, 1000)).toBe(true);
            expect(isFullyReducedByAtom(0, 10)).toBe(true);
            expect(isFullyReducedByAtom(5, 5)).toBe(false);
            expect(isFullyReducedByAtom(461, 500)).toBe(false);
            expect(isFullyReducedByAtom(1, 1)).toBe(false);
            expect(isFullyReducedByAtom(4, 5)).toBe(false);
            expect(isFullyReducedByAtom(9, 10)).toBe(false);

        });

        test("it should get correct subtractive atom for current atom", () => {

            expect(getSubtractiveAtomValue(1000)).toBe(100);
            expect(getSubtractiveAtomValue(500)).toBe(100);
            expect(getSubtractiveAtomValue(100)).toBe(10);
            expect(getSubtractiveAtomValue(50)).toBe(10);
            expect(getSubtractiveAtomValue(10)).toBe(1);
            expect(getSubtractiveAtomValue(5)).toBe(1);

        });

        test("it should know when subtractive notation is required", () => {

            expect(subtractiveNotationRequired(5, 5)).toBe(false);
            expect(subtractiveNotationRequired(1, 1)).toBe(false);
            expect(subtractiveNotationRequired(461, 500)).toBe(true);
            expect(subtractiveNotationRequired(4, 5)).toBe(true);
            expect(subtractiveNotationRequired(9, 10)).toBe(true);
            expect(subtractiveNotationRequired(461, 500)).toBe(true);
            expect(subtractiveNotationRequired(0, 1)).toBe(false);

        });

        test("it should convert/reduce arabic value completely by current atom", () => {

            expect(convertForArabicAtom(5, 5)).toStrictEqual([ Roman.V ]);
            expect(convertForArabicAtom(3461, 1000)).toStrictEqual([ Roman.M, Roman.M, Roman.M ]);
            expect(convertForArabicAtom(461, 500)).toStrictEqual([ Roman.C, Roman.D ]);
        });

        test("it converts simple subtractive symbol combinations", () => {

            expect(arabicConverter(4)).toStrictEqual([ Roman.I, Roman.V ]);
            expect(arabicConverter(94)).toStrictEqual([ Roman.X, Roman.C, Roman.I, Roman.V ]);

        });

    });

});

