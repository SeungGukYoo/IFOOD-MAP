import Map from "@/components/Map";

import { getStoreData } from "./lib/getStoreData";

export default async function Home() {
  const storeData = await getStoreData("isr");
  return (
    <>
      <Map store={storeData.data["DATA"]} />
    </>
  );
}
