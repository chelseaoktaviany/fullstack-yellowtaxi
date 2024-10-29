import DashboardGrid from "./DashboardGrid";
import TripMap from "./TripMap";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        <DashboardGrid />
      </div>
      <div className="flex flex-row w-full">
        <TripMap />
      </div>
    </div>
  );
};

export default Dashboard;
