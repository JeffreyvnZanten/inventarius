import { getAllLocations } from "@/db/repository";

export default async function Home() {
  const locations = await getAllLocations();

  return <>Test</>;
}
