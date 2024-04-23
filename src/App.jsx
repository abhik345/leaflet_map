import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Icon } from "leaflet";
import placeholderIcon from "./icon/placeholder.png"; 
import "leaflet/dist/leaflet.css";

function App(props) {
  const { center, zoom } = props;

  const [currentPos, setCurrentPos] = useState(null);

  function ClickHandler({ setCurrentPos }) {
    useMapEvents({
      click(e) {
        setCurrentPos(e.latlng);
      },
    });
    return null;
  }
console.log(currentPos)
  const customIcon = new Icon({
    iconUrl: placeholderIcon,
    iconSize: [38, 38],
  });

  // const createClusterCustomIcon = function (cluster) {
  //   return new divIcon({
  //     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
  //     className: "custom-marker-cluster",
  //     iconSize: point(33, 33, true),
  //   });
  // };

  return (
    <>
      <div>
        <MapContainer center={center} zoom={zoom} className="map" >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickHandler setCurrentPos={setCurrentPos} />
          {currentPos && (
            <Marker position={currentPos} draggable={true} icon={customIcon}>
              <Popup position={currentPos}>
              Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  );
}

App.propTypes = {
  center: PropTypes.node.isRequired,
  zoom: PropTypes.node.isRequired,
  setCurrentPos: PropTypes.node,
};

export default App;
