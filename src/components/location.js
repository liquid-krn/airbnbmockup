import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Input from "./input";
import Button from "./button";

function Location() {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({ lat: 6.5244, lng: 3.3792 }); // default Lagos
  const [mapLoaded, setMapLoaded] = useState(false);

  async function handleClick() {
    if (!address) return;

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        setCoords({ lat: location.lat, lng: location.lng });
      } else {
        alert("Location not found. Try another address.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Find Our Point of Sale
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <Input
            iclassname="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 shadow-sm"
            placeholder="Enter a postcode or address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            className="px-6 py-3 w-full sm:w-auto rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors duration-300 shadow"
            click={handleClick}
            name="Locate Store"
          />
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            onLoad={() => setMapLoaded(true)}
          >
            {mapLoaded && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={coords}
                zoom={14}
              >
                <Marker position={coords} />
              </GoogleMap>
            )}
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default Location;
