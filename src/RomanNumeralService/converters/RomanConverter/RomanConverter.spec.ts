import { RomanNumeralSymbol as Roman } from "../../../RomanNumeralSymbol/RomanNumeralSymbol";
import { romanConverter } from './RomanConverter';

describe("RomanNumeralService", () => {

    describe("when asked to convert roman to arabic", () => {

        test("it converts base symbols", () => {

            expect(romanConverter([ Roman.I ])).toBe(1);
            expect(romanConverter([ Roman.V ])).toBe(5);
            expect(romanConverter([ Roman.X ])).toBe(10);
            expect(romanConverter([ Roman.L ])).toBe(50);
            expect(romanConverter([ Roman.C ])).toBe(100);
            expect(romanConverter([ Roman.D ])).toBe(500);
            expect(romanConverter([ Roman.M ])).toBe(1000);

        });

        test("it converts simple additive symbol combinations", () => {

            expect(romanConverter([ Roman.I, Roman.I ])).toBe(2);
            expect(romanConverter([ Roman.V, Roman.I ])).toBe(6);
            expect(romanConverter([
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
            expect(romanConverter([
                Roman.M, Roman.M, Roman.C, Roman.C, Roman.C, Roman.L, Roman.X, Roman.V
            ])).toBe(2365);

        });

        test("it converts simple subractive symbol combinations", () => {

            expect(romanConverter([ Roman.I, Roman.V ])).toBe(4);
            expect(romanConverter([ Roman.I, Roman.X ])).toBe(9);
            expect(romanConverter([ Roman.C, Roman.D ])).toBe(400);

        });

        test("it converts complex symbol combinations", () => {

            expect(romanConverter([
                Roman.M, Roman.M, Roman.M, Roman.C, Roman.M, Roman.X, Roman.C, Roman.I, Roman.X
            ])).toBe(3999);
            expect(romanConverter([Roman.X, Roman.C, Roman.I, Roman.V])).toBe(94);

            expect(romanConverter([
                Roman.M, Roman.M, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
            ])).toBe(3044);


            expect(romanConverter([
                Roman.M, Roman.C, Roman.M, Roman.X, Roman.L, Roman.I, Roman.V
            ])).toBe(1944);

        });

    });

});