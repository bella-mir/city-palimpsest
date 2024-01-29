import { LayerProps } from "react-map-gl";
import buildings from "./data/buildings.json";
import parks from "./data/parks.json";
import spots from "./data/spots.json";

export const buildingsFillStyle: LayerProps = {
  id: "buildings",
  type: "fill",
  paint: {
    "fill-color": {
      property: "Period",
      stops: [
        [1, "#d99e32ff"],
        [2, "#f27649ff"],
        [3, "#668c54ff"],
        [4, "#bfba73ff"],
        [5, "#312640ff"],
        [6, "#8c7d4fff"],
        [7, "#568fa6ff"],
      ],
    },
  },
};

export const parksFillStyle: LayerProps = {
  id: "parks",
  type: "fill",
  paint: {
    "fill-color": {
      property: "Period",
      stops: [
        [1, "#d99e32ff"],
        [2, "#f27649ff"],
        [3, "#668c54ff"],
        [4, "#bfba73ff"],
        [5, "#312640ff"],
        [6, "#8c7d4fff"],
        [7, "#568fa6ff"],
      ],
    },
    // "fill-color": [
    //   "match",
    //   ["get", "Type_2"],
    //   "square",
    //   "#964B00",
    //   "park",
    //   "green",
    //   "garden",
    //   "green",
    //   "cemetry",
    //   "green",
    //   /* other */ "#BEB15A",
    // ],
    "fill-opacity": 0.5,
  },
};
export const parksOutline: LayerProps = {
  id: "parksOutline",
  type: "line",
  paint: {
    "line-color": [
      "match",
      ["get", "Type_2"],
      "square",
      "#964B00",
      "park",
      "green",
      "garden",
      "green",
      "cemetry",
      "green",
      /* other */ "#BEB15A",
    ],
    // "line-color": {
    //   property: "Period",
    //   stops: [
    //     [1, "#d99e32ff"],
    //     [2, "#f27649ff"],
    //     [3, "#668c54ff"],
    //     [4, "#bfba73ff"],
    //     [5, "#312640ff"],
    //     [6, "#8c7d4fff"],
    //     [7, "#568fa6ff"],
    //   ],
    // },
    // "line-width": 3,
  },
};

export const spotsStyle: LayerProps = {
  id: "spots2",
  type: "circle",
  source: "spots",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": {
      property: "Period",
      stops: [
        [1, "#d99e32ff"],
        [2, "#f27649ff"],
        [3, "#668c54ff"],
        [4, "#bfba73ff"],
        [5, "#312640ff"],
        [6, "#8c7d4fff"],
        [7, "#568fa6ff"],
      ],
    },
    "circle-radius": 7,
    "circle-stroke-width": 1,
    "circle-stroke-color": "white",
  },
};

export const clusterCountLayer: LayerProps = {
  id: "cluster-count",
  type: "symbol",
  source: "spots",
  filter: ["has", "point_count"],
  layout: {
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
};

export const clusterLayer: LayerProps = {
  id: "clusters",
  type: "circle",
  source: "spots",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": "#F08332",
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
};

export const LAYERS: any = {
  buildings: { data: buildings, style: buildingsFillStyle },
  spots: { data: spots, style: spotsStyle },
  parks: { data: parks, style: parksFillStyle },
};
