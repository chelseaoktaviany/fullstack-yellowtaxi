import { useState, useEffect } from "react";

import api from "../../api";

const TripTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await api
      .get("/api/trips")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Trips</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>ID</td>
              <td>Vendor ID</td>
              <td>Pickup date</td>
              <td>Dropoff date</td>
              <td>Trip distance</td>
              <td>Payment Type</td>
              <td>Fare amount</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.vendor_id}</td>
                <td>{new Date(item.pickup_datetime).toLocaleString()}</td>
                <td>{new Date(item.dropoff_datetime).toLocaleString()}</td>
                <td>{item.trip_distance}</td>
                <td>{item.payment_type}</td>
                <td>{item.fare_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripTable;
