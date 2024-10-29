"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trips.init(
    {
      vendor_id: DataTypes.STRING,
      pickup_datetime: DataTypes.DATE,
      dropoff_datetime: DataTypes.DATE,
      passenger_count: DataTypes.INTEGER,
      trip_distance: DataTypes.FLOAT,
      pickup_longitude: DataTypes.FLOAT,
      pickup_latitude: DataTypes.FLOAT,
      store_and_fwd_flag: DataTypes.STRING,
      dropoff_longitude: DataTypes.FLOAT,
      dropoff_latitude: DataTypes.FLOAT,
      payment_type: DataTypes.STRING,
      fare_amount: DataTypes.FLOAT,
      mta_tax: DataTypes.FLOAT,
      tip_amount: DataTypes.FLOAT,
      tolls_amount: DataTypes.FLOAT,
      imp_surcharge: DataTypes.FLOAT,
      extra: DataTypes.FLOAT,
      rate_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Trips",
      timestamps: false,
    }
  );
  return Trips;
};
