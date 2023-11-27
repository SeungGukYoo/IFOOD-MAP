"use client";

import React, { useState } from "react";
import type { StoreType } from "./useMap";

const useStoresList = () => {
  const [stores, setStores] = useState<null | StoreType[]>(null);
  return { stores, setStores };
};

export default useStoresList;
