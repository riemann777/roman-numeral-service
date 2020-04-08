import {arabicNumberValidator} from "./ArabicNumberValidator";


describe("ArabicNumberValidator", () => {

    describe("when asked validate input that contains non numeric chars", () => {

        test("it should return false", () => {

            expect(arabicNumberValidator("abc")).toBe(false);
            expect(arabicNumberValidator(".")).toBe(false);
            expect(arabicNumberValidator("1234_")).toBe(false);
            expect(arabicNumberValidator("1234.9")).toBe(false);

        });

    });

    describe("when asked validate a number less than 0 or greater than 3999", () => {

        test("it should return false", () => {

            expect(arabicNumberValidator("4000")).toBe(false);
            expect(arabicNumberValidator("0")).toBe(false);
            expect(arabicNumberValidator("-1")).toBe(false);

        });

    });

    describe("when asked validate a number that is not an integer", () => {

        test("it should return false", () => {

            expect(arabicNumberValidator("654.321")).toBe(false);
            expect(arabicNumberValidator("1.0")).toBe(false);

        });

    });

    describe("when asked validate input that is valid", () => {

        test("it should return true", () => {

            expect(arabicNumberValidator("3999")).toBe(true);
            expect(arabicNumberValidator("1")).toBe(true);
            expect(arabicNumberValidator("321")).toBe(true);

        });

    });

});

