import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import { places } from '../../data/places';

const MyMap = () => {
  const [viewport, setViewport] = useState({
    latitude: -21.1307379,
    longitude: 55.5364801,
    zoom: 9,
  });

  const [chosenPopup, setChosenPopup] = useState(null);

  return (
    <ReactMapGL
      mapStyle={{
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tileSize: 256,
            attribution:
              'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 20,
          },
        ],
      }}
      width="100%"
      height={500}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        style={{
          right: 10,
          top: 10,
        }}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {places.map((place) => (
        <React.Fragment key={place.id}>
          <Marker
            latitude={place.lat}
            longitude={place.long}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <img
              onClick={() => {
                setChosenPopup(place.id);
              }}
              src={place.icon}
              width={50}
              height={50}
              alt={place.name}
            />
          </Marker>
          {chosenPopup === place.id ? (
            <Popup
              latitude={place.lat}
              longitude={place.long}
              offsetTop={-60}
              onClose={() => setChosenPopup(null)}
            >
              <p>{place.name}</p>
              <p>{place.description}</p>

              <Image src="/vercel.svg" alt="Vercel" width={50} height={50} />
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
    </ReactMapGL>
  );
};

export default MyMap;
