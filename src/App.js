import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";
function App() {
  return (
    <div className="App">
      <Header title="My Responsive Cards Webpage!" />
      <div className="card__holder">
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
        <Card
          description="Enim duis non anim non cillum eiusmod irure dolor amet est consectetur elit cupidatat minim."
          title="Some Title"
        />
      </div>
    </div>
  );
}

export default App;
