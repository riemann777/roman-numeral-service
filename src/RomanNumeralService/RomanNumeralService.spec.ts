import { romanNumeralService } from './RomanNumeralService';

describe("RomanNumeralService", () => {

    describe("when asked to convert roman to arabic", () => {

        xtest("", () => {

            expect(romanNumeralService()).toBe(null)
        });

    });

    // describe("when asked to convert arabic to roman", () => {
    //
    //     xtest("", () => {
    //
    //
    //     });
    //
    // });

});

