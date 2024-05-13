import Banner from "../Component/Banner1/Banner";

import { Helmet } from "react-helmet";
import MyTabs from "./MyTabs";
import Br from "./home/Br";
import Cat from "./home/Cat";
import About from "./home/About";
import Ab from "./home/Ab";

const Home = () => {
  return (
    <div className="bg-[#fafafa]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>JobHub | Home</title>
      </Helmet>

      <Banner></Banner>
      <Br />
      <MyTabs />
      <Cat />
      <About/>
      <Ab/>
    </div>
  );
};

export default Home;
