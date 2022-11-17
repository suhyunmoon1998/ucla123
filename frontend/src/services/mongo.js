import axios from "axios";

const base = "https://data.mongodb-api.com/app/data-vlgcz/endpoint/data/v1";
const key = "V4oz2u46pmgdOz3a9AzmhEIwxS69P50UIA4Ud5x2i2rxf04trr8Vjcm2Zv6XJe6t";

// for now, this function is being called in the homepage component
export function run() {
  const url = base + "/action/insertOne";

  axios
    .post(
      url,
      {
        dataSource: "Cluster0",
        database: "app_data",
        collection: "products",
        document: { name: "test" },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": key,
        },
      }
    )
    .then((response) => {
      console.log(response);
    });
}

// mongoDB docs for a post request:
// curl --request POST \
// 'https://data.mongodb-api.com/app/data-abcde/endpoint/data/v1/action/insertOne' \
// --header 'Content-Type: application/json' \
// --header 'api-key: TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6' \
// --data-raw '{
//     "dataSource": "Cluster0",
//     "database": "learn-data-api",
//     "collection": "hello",
//     "document": {
//       "text": "Hello from the Data API!",
//     }
// }'
