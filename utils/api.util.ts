import { config } from "@CONFIG/appWrite.config";

import { Table } from "@/config/dataBase.config";
import { Address } from "@/interfaces/Address.interface";
import {
  Account,
  Client,
  Databases,
  Query,
  Storage,
} from "react-native-appwrite";
import { find, getCount, insertOne } from "./databaseApi.util";
import { errorHandler } from "./helper.util";

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account: Account = new Account(client);
const storage: Storage = new Storage(client);
const databases: Databases = new Databases(client);

// Get all category
const getAllCategory = async () => {
  try {
    const posts = await databases.listDocuments(
      config.dataBaseId,
      config.categoryId
    );
    return posts.documents;
  } catch (error) {
    errorHandler(error);
  }
};

// get all product for category
const getProductForCategory = async (categoryId: string) => {
  try {
    const posts = await databases.listDocuments(
      config.dataBaseId,
      config.productId,
      [Query.equal("categoryId", categoryId)]
    );
    return posts.documents;
  } catch (error) {
    errorHandler(error);
  }
};

// Get productDetails By id
const getProductDetails = async (productId: string) => {
  try {
    if (productId) {
      const data = await databases.listDocuments(
        config.dataBaseId,
        config.productDetailsId,
        [Query.equal("product", productId)]
      );
      if (data.documents.length > 0) {
        data.documents[0].unit = JSON.parse(data.documents[0].unit);
        data.documents[0].highlights = JSON.parse(data.documents[0].highlights);
        data.documents[0].productDetails = JSON.parse(
          data.documents[0].productDetails
        );
      }
      return data.documents[0];
    }
  } catch (error) {
    errorHandler(error);
  }
};

const addAddress = async (address: Address) => {
  try {
    const res = await insertOne(address, Table.address);
    return res;
  } catch (error) {
    console.error(error);
  }
};
//Get total count in a collection
const getTotalCount = async (collection: string) => {
  try {
    return getCount(collection);
  } catch (error) {}
};
// Get all address
const getAllAddress = async (page: number) => {
  try {
    const result = await find({}, Table.address, {}, page);
    return result;
  } catch (error) {
    errorHandler(error);
  }
};
export {
  addAddress,
  getAllAddress,
  getAllCategory,
  getProductDetails,
  getProductForCategory,
};
