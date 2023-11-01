import Card from "./components/Card";
import './App.css';

 export default function App(){
  const card1 = {
    name: "red",
    color: "red",
    code: "#596322"
  };
  const card2 = {
    name: "green",
    color: "green",
    code: "#092222"
  };
  const card3 = {
    name: "yellow",
    color: "yellow",
    code: "#12566"
  };
  const card4 = {
    name: "orange",
    color: "orange",
    code: "#592222"
  };
  const card5 = {
    name: "black",
    color: "black",
    code: "#000000"
  };


  return (
    <div className="App">
      <h1>Assignment-React-Props</h1>
      <div>
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card5} />
      <Card data={card2} />
      </div>
    </div>
  );
 }