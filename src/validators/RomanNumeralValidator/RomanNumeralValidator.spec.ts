import { romanNumeralValidator } from "./RomanNumeralValidator";


describe("RomanNumeralValidator", () => {

    describe("when asked to validate input that contains non roman symbols", () => {

        test("it should return false", () => {

            expect(romanNumeralValidator("abc")).toBe(false);
            expect(romanNumeralValidator("123")).toBe(false);
            expect(romanNumeralValidator("._*")).toBe(false);

        });

    });

    describe("when asked to validate input that contains too many or too few symbols", () => {

        test("it should return false", () => {

            expect(romanNumeralValidator("")).toBe(false);
            expect(romanNumeralValidator("MMMMDCCCLXXXVIII")).toBe(false);

        });

    });

    describe("when asked to validate input with more than 3 of the same symbol in succession", () => {

        test("it should return false", () => {

            expect(romanNumeralValidator("IIII")).toBe(false);
            expect(romanNumeralValidator("MMMMDCCCLXXXVIII")).toBe(false);

        });

    });

    describe("when asked to validate input with invalid subtractive notation", () => {

        test("it should return false", () => {

            expect(romanNumeralValidator("VL")).toBe(false);
            expect(romanNumeralValidator("MMMMLCXXXVXI")).toBe(false);
            expect(romanNumeralValidator("XMID")).toBe(false);
            expect(romanNumeralValidator("XMIIV")).toBe(false);

        });

    });

    describe("when asked to validate input that is valid", () => {

        test("it should return true", () => {

            expect(romanNumeralValidator("III")).toBe(true);
            expect(romanNumeralValidator("MMMDCCCLXXXVIII")).toBe(true);
            expect(romanNumeralValidator("CMIV")).toBe(true);

        });

    });

});
