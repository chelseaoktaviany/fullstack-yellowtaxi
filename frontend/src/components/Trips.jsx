import { Link } from "react-router-dom";

import TripChart from "./TripChart";
import TripTable from "./TripTable";

const Trips = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2">
        <p className="font-light">
          Back to <Link to="/">dashboard</Link>
        </p>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <TripChart />
      </div>
      <div className="flex flex-row w-full">
        <TripTable />
      </div>
    </div>
  );
};

export default Trips;
