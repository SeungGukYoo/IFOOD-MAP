import { getStoreData } from "@/app/lib/getStoreData";

import React from "react";
import MapBox from "./MapBox";

const Map = async () => {
  const storeData = await getStoreData();

  return <MapBox store={storeData.data["DATA"]} />;
};

export default Map;
