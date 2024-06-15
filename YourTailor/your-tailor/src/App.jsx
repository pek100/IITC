import "./App.css";
import "https://kit.fontawesome.com/2bae59e414.js";
import {Card} from "./Card.jsx";
import { useState } from "react";


export default function App() { 
  
  const [newCard, setNewCard] = useState([]);
  let latestId = 0;
  const [scrollButton, setscrollButton] = useState("");
  const [scrollButtonIcon, setScrollButtonIcon] = useState("fa-solid fa-chevron-up");
  const [scrollButtonVisibility, setScrollButtonVisibility] = useState("invisible");

  function changescroll(){
  setscrollButton(scrollButton=="#top"?"#"+latestId:"#top");
  setScrollButtonIcon(scrollButton!="#top"?"fa-solid fa-chevron-down":"fa-solid fa-chevron-up");
  }

  function addCards() {
    setNewCard((currentCards) => {
      return [...currentCards,{id: crypto.randomUUID()}, {id: crypto.randomUUID()}, {id: crypto.randomUUID()}];
    });

    setscrollButton("");
    setScrollButtonIcon("fa-solid fa-chevron-up");
    setScrollButtonVisibility(newCard.length > 2? "scrollBtn": "invisible");
  }

  console.log(newCard);

  return <div className="container">
    <h1 className="lblTop">What would you wear?</h1>

  <div className="gallery">
  {newCard.map(card => <div className={latestId + 1 > newCard.length - 3 ?"margined-cards":
      latestId < 3 ? "unmargined-cards": ""} id={(latestId++)+1}  key={card.id}><Card/></div>)}
  </div>


  <a onClick={changescroll} href={scrollButton} className={scrollButtonVisibility}><h2><i className={scrollButtonIcon}></i></h2></a>
  <a onClick={addCards} href={"#"+latestId} className="generateBtn"><h2><i className="fa-solid fa-rotate"></i></h2></a>

  <footer id="footer"></footer>
  </div>

}