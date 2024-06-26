import React from "react";
import useCurrentLocation from "./useCurrentLocation";

const LocationComponent = () => {
  const { location, getCurrentLocation, loading, error } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};

export default LocationComponent;
