import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Entry from "./Components/Entry";
import data from "./entry-data";

export default function App() {
  const entries = data.map((item) => {
    return (
      <div>
        <Entry key={item.id} {...item} />
        <hr className="Entry-line" />
      </div>
    );
  });
  return (
    <div className="App">
      <Navbar />
      {entries}
    </div>
  );
}
