import { useState, useEffect } from "react";
import {
  Marker,
  Polyline,
  Popup,
  MapContainer,
  TileLayer,
} from "react-leaflet";

import api from "../../api";

const TripMap = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await api
      .get("/api/trips")
      .then((res) => setData(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Trips</strong>
      <div className="mt-3">
        <MapContainer
          center={[40.7128, -74.006]}
          zoom={12}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {data.map((trip, index) => {
            const pickupPosition = [
              trip.pickup_latitude,
              trip.pickup_longitude,
            ];
            const dropoffPosition = [
              trip.dropoff_latitude,
              trip.dropoff_longitude,
            ];

            const tripCoordinates = [
              [trip.pickup_latitude, trip.pickup_longitude],
              [trip.dropoff_latitude, trip.dropoff_longitude],
            ];

            return (
              <>
                <Marker position={pickupPosition}>
                  <Popup>
                    <div>
                      <h3>Trip Details</h3>
                      <p>Passenger Count: {trip.passenger_count}</p>
                      <p>
                        Pickup Time:{" "}
                        {new Date(trip.pickup_datetime).toLocaleString()}
                      </p>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={dropoffPosition}>
                  <Popup>
                    <div>
                      <h3>Trip Details</h3>
                      <p>Passenger Count: {trip.passenger_count}</p>
                      <p>
                        Pickup Time:{" "}
                        {new Date(trip.dropoff_datetime).toLocaleString()}
                      </p>
                    </div>
                  </Popup>
                </Marker>

                <Polyline
                  key={index}
                  positions={tripCoordinates}
                  color="blue"
                  opacity={0.7}
                  dashArray="5, 5"
                />
              </>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default TripMap;
