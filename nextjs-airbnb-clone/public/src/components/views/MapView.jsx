import React, { useEffect, useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

import { userAppStore } from "airbnb/store/store";
import Pin from "../common/Pin";
import ListingCard from "../listingCard";

export default function MapView() {
  const [mapData, setMapData] = useState([]);
  const { listings } = userAppStore();

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      listings.map((data, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={data.mapData.longitude}
          latitude={data.mapData.latitude}
          anchor="top"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(data);
          }}
        >
          <Pin />
        </Marker>
      )),
    [listings]
  );

  return (
    <div
      className="h-[72.5vh] max-w-[100vw] pt-2
    "
    >
      <Map
        initialViewState={{
          longitude: 72.5714,
          latitude: 23.0225,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.mapData.longitude)}
            latitude={Number(popupInfo.mapData.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <ListingCard data={popupInfo} />
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
