import React, { FC, Fragment } from "react";

import Navbar from "../components/Navbar";
import Content from "../components/Dashboard/Content";

const Dashboard: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
    </Fragment>
  );
};

export default Dashboard;
