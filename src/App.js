import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import MintNFTForm from "./components/MintNFTForm";
import MintedNFT from "./components/MintedNFT";

function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <div className={"main-container"}>
        <MintNFTForm />
          <MintedNFT title={'#01'} />
      </div>
    </div>
  );
}

export default App;
