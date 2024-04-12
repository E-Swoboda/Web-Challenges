import { useEffect } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL);

  useEffect(() => {
    const timer = setInterval(() => {
      mutate(); // Trigger SWR revalidation
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [mutate]);

  if (error) return <div>Error fetching ISS position</div>;
  if (!data) return <div>Loading...</div>;

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={mutate} // Pass mutate function to Controls
      />
    </main>
  );
}
