import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import fetch from "node-fetch";
import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import React, { useEffect, useState } from "react";

const Vehicles = () => {

      const trafikLab_api_key = "b0144dba80b646d4b19469dd5430d3d9"; // TrafikLab API key
      const tarfikLab_url = "https://opendata.samtrafiken.se/gtfs/sl/sl.zip"; // SL GTFS  Realtime API URL

      return (
            <div>
                  <h1>Vehicles</h1>
            </div>
      );
};

export default Vehicles;