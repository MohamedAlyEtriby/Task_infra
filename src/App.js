import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import { useContext, useState } from "react";
import NewBrand from "./components/NewBrand";
import ContextProvider, { Mycontext } from "./context/context";

function App() {
  const { setshow, show } = useContext(Mycontext);
  return (
    <div className="w-full min-h-screen flex ">
      <SideBar />
      <RightBar />

      {show && <NewBrand />}
    </div>
  );
}

export default App;
