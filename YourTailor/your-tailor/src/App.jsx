import "./styles.css";
import "https://kit.fontawesome.com/2bae59e414.js";
import {Card} from "./card.jsx";
import { useState } from "react";


export default function App() {
  
  const [newCard, setNewCard] = useState([]);
  let latestId = 0;
  const [scrollButton, setScrollButton] = useState("");
  const [scrollButtonIcon, setScrollButtonIcon] = useState("fa-solid fa-chevron-up");
  const [scrollButtonVisibility, setScrollButtonVisibility] = useState("invisible");


  function changescroll(){
  setScrollButton(scrollButton=="#top"?"#"+latestId:"#top");
  setScrollButtonIcon(scrollButton!="#top"?"fa-solid fa-chevron-down":"fa-solid fa-chevron-up");
  }

  function addCards() {
    setNewCard((currentCards) => {return [...currentCards, {id: crypto.randomUUID(), completed: false},]});
    setNewCard((currentCards) => {return [...currentCards, {id: crypto.randomUUID(), completed: false},]});
    setNewCard((currentCards) => {return [...currentCards, {id: crypto.randomUUID(), completed: false},]});
    setScrollButton("");
    setScrollButtonIcon("fa-solid fa-chevron-up");
    setScrollButtonVisibility(newCard.length > 2? "scrollBtn": "invisible");
  }

  console.log(newCard);

  return <div className="container">
    <h1 className="lblTop">What would you wear?</h1>

  <div className="gallery">
  {newCard.map(card => <div id={(latestId++)+1}  key={card.id}><Card/></div>)}
  </div>


  <a onClick={changescroll} href={scrollButton} className={scrollButtonVisibility}><h2><i class={scrollButtonIcon}></i></h2></a>
  <a onClick={addCards} href={"#"+latestId} className="generateBtn"><h2><i class="fa-solid fa-rotate"></i></h2></a>

  <footer id="footer"></footer>
  </div>

}