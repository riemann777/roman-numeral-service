import {MongoClient} from "mongodb";

const conversionstoreName: string = process.env.CONVERSION_STORE_DB_NAME || "conversionStore";
const conversionsCollectionName: string = process.env.CONVERSION_STORE_COLLECTION_NAME || "conversions";


export const save = (conversion: { inputValue: string | number, convertedValue: string | number }, client: MongoClient) => {

    const db = client.db(conversionstoreName);
    const collection = db.collection(conversionsCollectionName);

    return collection.insertOne(conversion);
};