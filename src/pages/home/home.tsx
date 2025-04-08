import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import AboutHome from "../../components/about-home/about-home";
import ServiceList from "../../components/service-list/service-list";
import Calculate from "../../components/calculate/calculate";
import Team from "../../components/team/team";
import Comments from "../../components/comments/comments";
import Experience from "../../components/experience/experience";

function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <AboutHome />
      <ServiceList />
      <Calculate />
      <Team />
      <Comments />
      <Experience />
    </main>
  );
}

export default Home;
