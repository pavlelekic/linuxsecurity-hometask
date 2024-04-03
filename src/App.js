import React from "react";
import { SidebarPushable, Container } from "semantic-ui-react";
import TopMenu from "./components/TopMenu";
import LeftMenu from "./components/LeftMenu";
import WeatherDisplay from "./pages/WeatherDisplay";
import "./App.css";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

  return (
    <React.Fragment>
      <TopMenu setIsSidebarVisible={setIsSidebarVisible} />
      <SidebarPushable>
        <LeftMenu isSidebarVisible={isSidebarVisible} />
        <div className="main-content">
          <WeatherDisplay />
        </div>
      </SidebarPushable>
    </React.Fragment>
  );
};

export default App;
