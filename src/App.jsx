import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
};

export default App;
