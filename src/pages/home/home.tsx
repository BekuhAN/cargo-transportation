import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import AboutHome from "../../components/about-home/about-home";
import ServiceList from "../../components/service-list/service-list";

function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <AboutHome />
      <ServiceList />
    </main>
  );
}

export default Home;
