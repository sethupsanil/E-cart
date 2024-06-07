import { databaseConfig } from "@/config/dataBase.config";
import axios from "axios";

const CLIENT_APP_ID = databaseConfig.projectId;
const API_KEY = databaseConfig.apiKey;
const BASE_URL = databaseConfig.endpoint;
const DataSource = databaseConfig.databaseName;
const handleRequest = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/${CLIENT_APP_ID}/endpoint/data/v1/action/${endpoint}`,
      data,
      {
        headers: {
          apiKey: API_KEY,
          "Content-Type": "application/ejson",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (err: any) {
    console.error(err);
    return null;
  } finally {
  }
};

const findOne = async (filter: any, database: string) => {
  const [data, count] = await Promise.all([
    handleRequest("findOne", {
      dataSource: DataSource,
      database,
      collection: "tasks",
      filter,
    }),
    getCount(database),
  ]);
  return { data, count };
};

const find = async (
  filter: any,
  database: string,
  sort = {},
  page = 1,
  limit = 10
) => {
  const [data, totalCount] = await Promise.all([
    handleRequest("find", {
      dataSource: DataSource,
      database: DataSource,
      collection: database,
      filter,
      sort,
      skip: page * limit,
      limit,
    }),
    getCount(database),
  ]);

  return { data: data.documents, totalCount };
};

const insertOne = async (document: any, database: string) => {
  return await handleRequest("insertOne", {
    dataSource: DataSource,
    database: DataSource,
    collection: database,
    document,
  });
};

const insertMany = async (documents: any, database: string) => {
  return await handleRequest("insertMany", {
    dataSource: DataSource,
    database,
    collection: "tasks",
    documents,
  });
};

const updateOne = async (filter: any, update: any, database: string) => {
  return await handleRequest("updateOne", {
    dataSource: DataSource,
    database,
    collection: "tasks",
    filter,
    update,
  });
};

const deleteOne = async (filter: any, database: string) => {
  return await handleRequest("deleteOne", {
    dataSource: DataSource,
    database,
    collection: "tasks",
    filter,
  });
};

const getCount = async (collection: string) => {
  try {
    const { documents } = await handleRequest("aggregate", {
      dataSource: DataSource,
      database: DataSource,
      collection: collection,
      pipeline: [{ $count: "total" }],
    });

    return documents[0].total || 0;
  } catch (error) {
    return 0;
  }
};
export { deleteOne, find, findOne, getCount, insertMany, insertOne, updateOne };
