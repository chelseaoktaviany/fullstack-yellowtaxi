import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import api from "../../api";

const DashboardStatsGrid = () => {
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
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
    fetchAllData();
  }, []);

  return (
    <>
      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Chart</strong>
        <div className="w-full mt-3 flex-1 text-xs">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              width={500}
              height={600}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
              <XAxis
                dataKey="pickup_datetime"
                tickFormatter={(unixTime) =>
                  new Date(unixTime).toLocaleDateString()
                }
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="passenger_count" fill="#0ea5e9" />
              <Bar dataKey="fare_amount" fill="#ea580c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default DashboardStatsGrid;
