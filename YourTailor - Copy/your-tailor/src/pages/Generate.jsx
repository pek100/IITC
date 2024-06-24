import { useState, useEffect, useCallback, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Card } from "../components/Card.jsx";
import icon from "../assets/YourTailor.svg";
import logo from "../assets/YourTailorLogo.svg";

const GenerationsPage = () => {

  const isSmallScreen = useMediaQuery({
    query: "(min-width:0px) and (max-width: 600px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width:600px) and (max-width: 800px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });

  const mockProducts = [
    { id: 123, type: "tshirt", price: 123, currency: "USD", imgUrl: "" },
  ]; //? what the server will output

  const [newCard, setNewCard] = isBigScreen
    ? useState([
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
        { id: crypto.randomUUID() },
      ])
    : useState([{ id: crypto.randomUUID() }]);
  const [scrollButton, setscrollButton] = useState("");
  const [scrollButtonIcon, setScrollButtonIcon] = useState(
    "fa-solid fa-chevron-up"
  );
  const [scrollButtonVisibility, setScrollButtonVisibility] =
    useState("invisible");

  // Refs for pull-to-load-more
  const pullStartY = useRef(0);
  const pullMoveY = useRef(0);
  const distanceThreshold = -50; // Negative because we're pulling up
  const isDragging = useRef(false);
  const containerRef = useRef(null);
  const latestIdRef = useRef(0);

  function changescroll() {
    setscrollButton(
      scrollButton == "#top" ? "#" + latestIdRef.current : "#top"
    );
    setScrollButtonIcon(
      scrollButton != "#top"
        ? "fa-solid fa-chevron-down"
        : "fa-solid fa-chevron-up"
    );
  }

  // add cards dynamically to array
  const addCards = useCallback(() => {
    let newCards = [];
    const currentCardCount = newCard.length;

    if (isBigScreen) {
      const cardsNeededForRow = 3 - (currentCardCount % 3);

      if (cardsNeededForRow < 3) {
        for (let i = 0; i < cardsNeededForRow; i++) {
          newCards.push({ id: crypto.randomUUID() });
        }
      } else {
        newCards = [
          { id: crypto.randomUUID() },
          { id: crypto.randomUUID() },
          { id: crypto.randomUUID() },
        ];
      }
    } else if (isMobile || isSmallScreen) {
      newCards = [{ id: crypto.randomUUID() }];
    }
    //
    // output card array as actual cards
    setNewCard((currentCards) => {
      const updatedCards = [...currentCards, ...newCards];
      latestIdRef.current = updatedCards.length;
      return updatedCards;
    });

    // scroll button
    setscrollButton("");
    setScrollButtonIcon("fa-solid fa-chevron-up");
    isBigScreen &&
      setScrollButtonVisibility(newCard.length > 2 ? "scrollBtn" : "invisible");
    isMobile ||
      (isSmallScreen &&
        setScrollButtonVisibility(
          newCard.length > 0 ? "scrollBtn" : "invisible"
        ));

    setTimeout(() => {
      const dynamicFocus = document.getElementById(latestIdRef.current);
      if (dynamicFocus) {
        dynamicFocus.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 10);
  }, [isSmallScreen, isMobile, isBigScreen, newCard.length]);
  //

  const marginCards = useCallback(
    (index, cardCount) => {
      if (isMobile || isSmallScreen) {
        return index + 1 == cardCount
          ? "margined-cards"
          : index < 1
          ? "unmargined-cards"
          : "";
      }

      if (isBigScreen) {
        const leftOverCards = 3 - Math.round(index % 3);
        return index + 1 > cardCount - leftOverCards - 3
          ? "margined-cards"
          : index < 3
          ? "unmargined-cards"
          : "";
      }
      return "";
    },
    [isMobile, isBigScreen, isSmallScreen]
  );

  useEffect(() => {
    // isMobile or isBigScreen change
    setNewCard((currentCards) => [...currentCards]); // Force re-render
  }, [isMobile, isBigScreen, isSmallScreen]);

  //load onScroll handling
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
    if ((isMobile || isSmallScreen) && containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      container.addEventListener("touchend", handleTouchEnd);

      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isMobile, isSmallScreen]);

  return (
    <div className="generation-page">
      <h1 className="lblTop">
        <a className="icon">
          <h2>
            <img src={logo} alt="" />
          </h2>
        </a>
      </h1>
      <div className="container" ref={containerRef}>
        <div className="gallery">
          {newCard.map(
            (
              { id },
              index // products instead of newCard
            ) => (
              <div
                className={marginCards(index, newCard.length)}
                id={index + 1}
                key={id}
              >
                <Card />
              </div>
            )
          )}
        </div>
        <a className="profileBtn">
          <h2>
            <i className="fa-solid fa-user"></i>
          </h2>
        </a>
        <a
          onClick={changescroll}
          href={scrollButton}
          className={scrollButtonVisibility}
        >
          <h2>
            <i className={scrollButtonIcon}></i>
          </h2>
        </a>
        <a onClick={addCards} className="generateBtn">
          <h2>
            <i className="fa-solid fa-rotate"></i>
          </h2>
        </a>
        <footer id="footer"></footer>
      </div>
    </div>
  );
};

export default GenerationsPage;
