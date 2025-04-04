import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import AboutHome from "../../components/about-home/about-home";
import ServiceList from "../../components/service-list/service-list";
import Calculate from "../../components/calculate/calculate";

function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <AboutHome />
      <ServiceList />
      <Calculate />
    </main>
  );
}

export default Home;
