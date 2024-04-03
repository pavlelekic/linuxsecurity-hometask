import React from "react";
import TopMenu from "./components/TopMenu";
import LeftMenu from "./components/LeftMenu";
import WeatherDisplay from "./pages/WeatherDisplay";

const App = () => {
  return (
    <React.Fragment>
      <TopMenu />
      <div
        style={{
          marginTop: "40px",
          height: "calc(100% - 40px)",
          overflow: "hidden",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <LeftMenu />
        <div
          className="vertically-scrollable"
          style={{
            flexGrow: 1,
            background: "rgb(229, 229, 229)",
          }}
        >
          <WeatherDisplay />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
