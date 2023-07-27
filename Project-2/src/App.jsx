import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="container">
      <Header />

      <div className="flex">{cards}</div>
    </div>
  );
}

export default App;
