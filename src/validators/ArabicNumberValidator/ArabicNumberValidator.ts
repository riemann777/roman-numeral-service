
export const arabicNumberValidator = (arabicInput: string) =>
    /^[0-9]{1,4}$/.test(arabicInput) &&
    parseInt(arabicInput, 10) > 0 &&
    parseInt(arabicInput, 10) < 4000;