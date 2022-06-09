import React from "react";
import Menu from "../../components/layouts/menu/Menu";
import Content from "../../components/layouts/content/Content";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Menu />
      <Content />
    </div>
  );
}

export default Home;
