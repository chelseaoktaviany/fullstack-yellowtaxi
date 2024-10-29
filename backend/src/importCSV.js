const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config({ path: ".env" });

const sequelize = require("./config/db");

const { Trips } = require("./models");

const SOCRATA_DATASET_URL =
  "https://data.cityofnewyork.us/resource/gkne-dk5s.json";

const SOCRATA_APP_TOKEN = process.env.SOCRATA_APP_TOKEN;

const importCSV = async () => {
  try {
    const response = await axios.get(SOCRATA_DATASET_URL, {
      params: {
        $limit: 10,
      },
      headers: {
        "X-App-Token": SOCRATA_APP_TOKEN,
      },
    });

    const taxiData = response.data;

    const mappedData = taxiData.map((item) => ({
      vendor_id: item.vendor_id,
      pickup_datetime: item.pickup_datetime,
      dropoff_datetime: item.dropoff_datetime,
      passenger_count: item.passenger_count,
      trip_distance: item.trip_distance,
      pickup_longitude: item.pickup_longitude,
      pickup_latitude: item.pickup_latitude,
      store_and_fwd_flag: item.store_and_fwd_flag,
      dropoff_longitude: item.dropoff_longitude,
      dropoff_latitude: item.dropoff_latitude,
      payment_type: item.payment_type,
      fare_amount: item.fare_amount,
      mta_tax: item.mta_tax,
      tip_amount: item.tip_amount,
      tolls_amount: item.tolls_amount,
      imp_surcharge: item.imp_surcharge,
      extra: item.extra,
      rate_code: item.rate_code,
    }));

    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync();

    await Trips.bulkCreate(mappedData, { validate: true });

    console.log("Data successfully imported into database");
  } catch (err) {
    console.error("Error fetching or inserting data:", err.message);
  }
};

importCSV();
