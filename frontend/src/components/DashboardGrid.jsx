import { useState, useEffect } from "react";
import { BiTrip, BiMoney } from "react-icons/bi";

import api from "../../api";

const DashboardGrid = () => {
  const [tripData, setTripData] = useState([]);
  const [totalFares, setTotalFares] = useState(0);

  const BoxWrapper = ({ children }) => {
    return (
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        {children}
      </div>
    );
  };

  const fetchData = async () => {
    await api
      .get("/api/trips")
      .then((res) => {
        const { data } = res.data;

        setTripData(data);

        const totalFare = tripData.reduce(
          (sum, trip) => sum + (trip.fare_amount || 0),
          0
        );

        setTotalFares(totalFare);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <BiTrip className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total trips</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              {tripData.length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <BiMoney className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total fare</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              ${totalFares}
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardGrid;
