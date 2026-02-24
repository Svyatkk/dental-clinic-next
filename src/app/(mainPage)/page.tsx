
import Main from "./Main";
import { PAGES } from "@/config/routes";
import { generateMetadata as getMetadataService } from "@/services/generateMetadata.services";
export function generateMetadata() {
  return getMetadataService(PAGES.MAIN);
}

export default function Home() {


  return (
    <>
      <Main></Main>
    </>
  );
}