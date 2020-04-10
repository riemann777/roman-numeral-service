import * as converstionRepository from "./ConversionRepository";


describe("ConversionRepository", () => {

    describe("when asked to save a conversion", () => {

        test("it should call mongo client correctly", () => {

            const insertOneMock = jest.fn().mockResolvedValue({ result: { n: 1, ok: 1 } });
            const mockClient = {
                db: () => ({ collection: () => ({ insertOne: insertOneMock }) })
            };

            converstionRepository.save({ mock: "conversion" }, mockClient).then(() => {

                expect(insertOneMock).toHaveBeenCalledTimes(1);

            });


        });

    });

});

