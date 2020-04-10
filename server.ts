import * as restify from "restify";
import * as corsMiddleware from "restify-cors-middleware";
import { convertArabicToRoman, convertRomanToArabic } from "./src/RomanNumeralService/RomanNumeralService";
import { romanNumeralValidator as isValidRoman } from "./src/validators/RomanNumeralValidator/RomanNumeralValidator";
import { arabicNumberValidator as isValidArabic } from "./src/validators/ArabicNumberValidator/ArabicNumberValidator";


const server: any = restify.createServer();

const cors = corsMiddleware({
    origins: ["http://localhost:3000"],
    allowHeaders: [],
    exposeHeaders: []
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.pre(cors.preflight);
server.use(cors.actual);

server.get('/roman/:inputValue', (request: any, response: any) => {

    const romanInput = request.params.inputValue;

    if (!isValidRoman(romanInput)) {

        return response.send(400, { error: "Invalid input value: " + romanInput });
    }

    try {

        const arabic = convertRomanToArabic(romanInput);

        return response.json({ inputValue: romanInput, convertedValue: arabic });

    } catch (e) {

        return response.send(500, { error: "Server Error: error converting roman input value: " + romanInput });
    }

});

server.get('/arabic/:inputValue', (request: any, response: any) => {

    const arabicValue = request.params.inputValue;

    if (!isValidArabic(arabicValue)) {

        return response.send(400, { error: "Invalid input value: " + arabicValue });
    }

    try {

        const roman = convertArabicToRoman(arabicValue);

        return response.json({ inputValue: arabicValue, convertedValue: roman });

    } catch (e) {

        return response.send(500, { error: "Server Error: error converting roman input value: " + arabicValue });
    }

});

server.listen(8000, () =>
    console.log('%s listening at %s', server.name, server.url));