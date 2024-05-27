const stickElement = document.getElementsByClassName("stick");
const spins = [];
const spinDirection = [];
const hoverOffsets = [];
const blur = [];
const gameContainer = document.querySelector(".gameContainer");


function fallAnimation() {
  for (let i = 0; i < stickElement.length; i++) { // loop to go over all sticks
    const stick = stickElement[i]; // asigns current stick to element
    let top = parseInt(stick.style.top) || 0; // gets top from function / otherwise returns 0 (on first run)

    if (spins[i] === undefined) { // defines new parameters when spin[i] is undefined (first ever assignment)
      spins[i] = Math.random() * 180; //random spin assignment
      spinDirection[i] = Math.random()>0.5? "+" : "-"; // random spin direction assignment
      hoverOffsets[i] = Math.random() * 6 - 5; // Random fall offset
      blur[i] = Math.random() > 0.6 ? 0 : Math.random() * 6; // Random blur amount
      stick.style.filter = `blur(${blur[i]}px)`;
    }

    spins[i] += 2; //increment spin
    stick.style.transform = `rotate(${spinDirection[i]+spins[i]}deg)`; // applies random spin + spin direction
    top += 5 + hoverOffsets[i]; //increment fall


    if (top >= window.innerHeight - 200) { //if stick at bottom change fall direction (up)
    hoverOffsets[i] = Math.random() * 1 - 7.5; 
    }
    if (top <= 0) { //if stick at top change fall direction (down)
        hoverOffsets[i] = Math.random() * 3 - 4.5;
        }

    stick.style.top = `${top}px`;
  }

  requestAnimationFrame(fallAnimation);

  // for (let i=0; i<sticksToRemove;i++){
    // stickElement[i].style.display = "none";
    // stickElement[i].style.backgroundColor = "red";
  // }
}

for (let i = 0; i < numOfSticks; i++) { //loop that spawns all sticks
  const stick = document.createElement("div");
  stick.classList.add("stick");
  stick.style.top = "50vh";
  stick.style.left = `${Math.random() * (window.innerWidth - 240) + 120}px`; // random position along the screen width
  gameContainer.appendChild(stick);
}

fallAnimation();