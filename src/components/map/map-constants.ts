import { LayerProps } from "react-map-gl";

export const layerFillStyle: LayerProps = {
  id: "dff",
  type: "fill",
  paint: {
    "fill-color": {
      property: "Period", // this will be your density property form you geojson
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
