import "./App.css";
import "https://kit.fontawesome.com/2bae59e414.js";
import {Card} from "./components/Card.jsx";
import { useState, useEffect, useCallback, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import icon from './assets/YourTailor.svg';

export default function App() {
  const [newCard, setNewCard] = useState([]);
  const [scrollButton, setscrollButton] = useState("");
  const [scrollButtonIcon, setScrollButtonIcon] = useState("fa-solid fa-chevron-up");
  const [scrollButtonVisibility, setScrollButtonVisibility] = useState("invisible");
  

  const isSmallScreen = useMediaQuery({ query: '(min-width:0px) and (max-width: 600px)' })
  const isMobile = useMediaQuery({ query: '(min-width:600px) and (max-width: 800px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
  

  // Refs for pull-to-load-more
  const pullStartY = useRef(0);
  const pullMoveY = useRef(0);
  const distanceThreshold = -50; // Negative because we're pulling up
  const isDragging = useRef(false);
  const containerRef = useRef(null);
  const latestIdRef = useRef(0);

  function changescroll(){
    setscrollButton(scrollButton=="#top"?"#"+latestIdRef.current:"#top");
    setScrollButtonIcon(scrollButton!="#top"?"fa-solid fa-chevron-down":"fa-solid fa-chevron-up");
  }

  // add cards dynamically to array
  const addCards = useCallback(() => {
    let newCards = [];
    const currentCardCount = newCard.length;

    if (isBigScreen) {
      const cardsNeededForRow = 3 - (currentCardCount % 3);
      
      if (cardsNeededForRow < 3) {
        for (let i = 0; i < cardsNeededForRow; i++) {
          newCards.push({id: crypto.randomUUID()});
        }
      } else {
        newCards = [{id: crypto.randomUUID()}, {id: crypto.randomUUID()}, {id: crypto.randomUUID()}];
      }
    } else if (isMobile || isSmallScreen) {
      newCards = [{id: crypto.randomUUID()}];
    }
    //
    // output card array as actual cards
    setNewCard(currentCards => {
      const updatedCards = [...currentCards, ...newCards];
      latestIdRef.current = updatedCards.length;
      return updatedCards;
    });
   

    // scroll button
    setscrollButton("");
    setScrollButtonIcon("fa-solid fa-chevron-up");
    isBigScreen && setScrollButtonVisibility(newCard.length > 2? "scrollBtn": "invisible");
    isMobile || isSmallScreen && setScrollButtonVisibility(newCard.length > 0? "scrollBtn": "invisible");
  
    setTimeout(() => {
      const dynamicFocus = document.getElementById(latestIdRef.current);
      if (dynamicFocus) {
        dynamicFocus.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 10);
  }, [isSmallScreen ,isMobile, isBigScreen, newCard.length]);
    //



  const marginCards = useCallback((index, cardCount, secondPass) => {

      const onLoadFocus = document.getElementById(latestIdRef.current);
      if (onLoadFocus) {
        onLoadFocus.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }


    if (isMobile || isSmallScreen){
      return index + 1 == cardCount ? "margined-cards" :
             index < 1 ? "unmargined-cards" : "";
    }
    
    if (isBigScreen) {
      const leftOverCards = 3 - Math.round(((index) % 3)) ;
      return index + 1 > cardCount - leftOverCards - 3? "margined-cards" :
      index < 3 ? "unmargined-cards" : "";  
    }
    return "";



  }, [isMobile, isBigScreen, isSmallScreen]);


  useEffect(() => {
    // isMobile or isBigScreen change
    setNewCard(currentCards => [...currentCards]); // Force re-render
  }, [isMobile, isBigScreen, isSmallScreen]);


//load onScroll handaling
  const handleTouchStart = (e) => {
    pullStartY.current = e.touches[0].screenY;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    pullMoveY.current = e.touches[0].screenY;
    const touchDistance = pullMoveY.current - pullStartY.current;

    if (touchDistance < 0 && isAtBottom()) {
      e.preventDefault();
      // visual feedback -- loading indicator
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const touchDistance = pullMoveY.current - pullStartY.current;

    if (touchDistance < distanceThreshold && isAtBottom()) {
      addCards();
      // visual feedback, new cards are being loaded
    }

    pullStartY.current = 0;
    pullMoveY.current = 0;
  };

  const isAtBottom = () => {
    if (!containerRef.current) return false;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    return scrollTop + clientHeight >= scrollHeight - 5; // 5px threshold
  };

  useEffect(() => {
    if (isMobile || isSmallScreen && containerRef.current) {
      const container = containerRef.current;
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);

      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile, isSmallScreen]);

  //
  return (
    <>
          <h1 className="lblTop"></h1>
    <div className="container" ref={containerRef}>
      <div className="gallery">
      {newCard.map((card, index) => (
        <div className={marginCards(index, newCard.length, false)} id={index + 1} key={card.id}><Card/></div>
        ))}
      </div>
      <a className="icon"><h2><img src={icon} alt="" /></h2></a>
      <a className="profileBtn"><h2><i className="fa-solid fa-user"></i></h2></a>
      <a onClick={changescroll} href={scrollButton} className={scrollButtonVisibility}><h2><i className={scrollButtonIcon}></i></h2></a>
      <a onClick={addCards} className="generateBtn"><h2><i className="fa-solid fa-rotate"></i></h2></a>
      <footer id="footer"></footer>
    </div>
    </>
  );
}