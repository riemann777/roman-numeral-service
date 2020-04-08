import * as R from "ramda";

export const romanNumeralValidator = (romanInput: string) => {

    return /^[MDCLXVI]{1,15}$/.test(romanInput)
        && hasUnderSameConsecutiveLimit(romanInput.split(""));

};

const hasUnderSameConsecutiveLimit = ([current, ...rest]: string[], count: number = 1, limit: number = 3): boolean => {

    if (count > limit) {

        return false;
    }

    if (!rest.length) {

        return true;
    }

    return (current === R.head(rest))
        ? hasUnderSameConsecutiveLimit(rest, ++count)
        : hasUnderSameConsecutiveLimit(rest);
};
