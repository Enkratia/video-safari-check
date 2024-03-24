import React from "react";
import { Metadata } from "next";

// import { Hero } from "../components";

import cs from "../scss/helpers.module.scss";

// export const metadata: Metadata = {
//   title: "",
// };

const Home: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}></h1>

      {/* <Hero /> */}
    </main>
  );
};

export default Home;

// **
// await new Promise((resolve) => {
//   setTimeout(() => resolve(""), 6000);
// });
