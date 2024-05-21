/** You can see at "HOME" screen, how this app
 * should look in the end
 * 
 * אפשר לראות למטה במסך הבית איך האפליקציה
 * הזאת אמורה להיראות בסוף
 */

/** MISSION 05:
 * 
 * Create 5 "const":
 *  - for the <ul class="list">
 *  - for the 3 buttons("boys","girls","everybody") 
 *  - for the <input type="text" id="search">
 * 
 * Take the selectors from the lines 39-46 of about.html
 * 
 * 3 points
 * 
 */
const spanValue = document.querySelector(".list");
const boysBtn = document.querySelector("#boys");
const girlsBtn = document.querySelector("#girls");
const everybodyBtn = document.querySelector("#everybody");
const nSearch = document.querySelector("#search");

/** MISSION 06:
 * 
 * Create global const allLi and point it to an
 * empty array.
 * 
 * 1 point
 */

const allLi = [];

/** MISSION 07:
 * 
 * Create function (arrow or usual) getRandomFace()
 * that gets array (like boyImg or girlImg in the future missions)
 * as an argument.
 * 
 * - It should generate random idx
 * - and return the appropriate member of the given array
 * 
 * 10 points
 */

function getRandomFace(arr){
   let idx = Math.floor(Math.random()*(arr.length));
   return arr[idx];
}

/** MISSION 08:
 * 
 * Create function (arrow or usual) createLi()
 * that gets object (like from the array "persons")
 * as an argument.
 * It should:
 * 
 * - create new <li> element
 * - use "gender" property from the given object to
 *   add class to the element
 * - to set the text with the "personName"
 *   property from the object
 * - to add random face by calling
 *   getRandomFace(girlImg) if it is a girl
 *   or getRandomFace(boyImg) if it is a boy
 * - the example of the result is 
 *   <li class="boy">Lionel 🧔‍♂️</li>
 * - append the new <li> to  <ul class="list">
 * - add the new <li> to the array allLi
 * 
 * 
 * 10 points
 */

function createLi(person){
   let genderList = document.createElement("li");
   genderList.className = person.gender;
   genderList.innerHTML = person.personName;

   person.gender == "girl" ? genderList.innerHTML += getRandomFace(girlImg)
   :genderList.innerHTML += getRandomFace(boyImg)

   spanValue.append(genderList);
   allLi.push(genderList);
}

/* MISSION 09: - go over all the persons and create <li> elements
                 for each person using the function createLi()

  (10 points)

*/

for (i=0 ; i < persons.length; i++){
   createLi(persons[i]);
}


/**  MISSION 10: create 3 functions - "showBoys", "showGirls", 
* "showAll".
* 
* 1. "showBoys" should go over the list "allLi", check if it's className
  contains "boy" or by el.classList.contains("lalala"))
  and if it is, remove the class "hide",
  otherwise - add the class "hide".

  "showGirls" should go over the list "list", check if it's className
  contains "girl"
  (by el.className.indexOf("lalala")
                      or by el.classList.contains("lalala"))
  and if it is, remove the class "hide",
  otherwise - add the class "hide".

  "showAll" should go over the list "list" and just
  remove the class "hide" from each element.

  (10 points)

*/
function showBoys(el){
   for(i=0;i<allLi.length;i++){
      allLi[i].classList.contains("boy") ? allLi[i].classList.remove("hide")
      :allLi[i].classList.add("hide");
   }
}
function showGirls(){
   for(i=0;i<allLi.length;i++){
      allLi[i].classList.contains("girl") ? allLi[i].classList.remove("hide")
      :allLi[i].classList.add("hide");
   }
}
function showAll(){
   for(i=0;i<allLi.length;i++){
      allLi[i].classList.remove("hide")
   }
}



/**
 * MISSION 11 
 * 
 * One by one add to each button from the list 
 * event listener on "click"
 * 
 * to the "boys" - with function "showBoys"
 * to the "girls" - with function "showGirls"
 * to the "everyone" - with function "showAll"
 * 
 * (8 points)
 */

boysBtn.addEventListener("click", showBoys)
girlsBtn.addEventListener("click", showGirls)
everybodyBtn.addEventListener("click", showAll)

/**
 * MISSION 12

 * 
 * - Create funciton "search" that 
 *    -- gets value from the field "input" and converts it toLowerCase()
 *    -- goes over the array "persons"
 *     -- checks if the lower case of the personName of
 *        each object contains
 *       the string from the input 
 * 
 *    -- if contains, removes class "hide" from the appropriate
 *       element (with the same i as the object)
 *    -- otherwise - adds it
 * 
 * - Add listener on event "input" to the field "input" 
 *    to run the funciton "search"
 * 
 * - Ensure that everything works
 * 
 * 5 points
 */

function search(){
   let value = nSearch.value.toLowerCase();
   for(i=0;i<persons.length;i++){
      persons[i].personName.toLowerCase().includes(value) ? allLi[i].classList.remove("hide")
      :allLi[i].classList.add("hide");
   }
}

nSearch.addEventListener("input", search)


/* MISSION 13:
   There is a class "outlined" in about.css.
   Use it for the buttons and the input field to
   outline the current choice

   5 points
*/
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', (i) => {
   input.classList.remove("outlined");
   button.classList.remove("outlined");
   i.target.classList.add("outlined");
});
input.addEventListener('click', (i) => {
   button.classList.remove("outlined");
   i.target.classList.add("outlined");
});


/* MISSION 14:
   create at the hosting at your directory new directory "test"
   and upload there these files, ensure it works

   3 points
*/


/* MISSION 15 - bonus:
   Remove class "hide" from "Number of Random Persons"
   label in about.html.
   Use it's input to tell how many random persons 
   you want to see - and show this number of random persons

  10 points
*/
const label = document.querySelector('[for="random"]');
const randomN = document.querySelector('#random');

label.classList.remove("hide");

function shuffleArray(array) {
   for (let i = 0; i < array.length; i++) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
       [allLi[i], allLi[j]] = [allLi[j], allLi[i]];
   }
}

label.addEventListener("input", () => {
   shuffleArray(persons);
   for (let i = 0; i < persons.length; i++) {
      if (i < parseInt(randomN.value)) {
         allLi[i].classList.remove("hide");
      } else {
         allLi[i].classList.add("hide");
      }
      console.log(randomN.value)
}})

/* MISSION 16 - bonus:
   Remove class "hide" from "shuffle faces"
   button in about.html.
   Use the button to remove a face from each <li>
   and to supply it with new random face.

   10 points
*/
const shuffleFaces = document.querySelector("#shuffle-faces");
shuffleFaces.classList.remove("hide");

shuffleFaces.addEventListener("click", () => {
   for (i=0 ; i < persons.length; i++){
      while(allLi.length > 0) {
         allLi.pop();
         spanValue.removeChild(spanValue.lastChild);
     }
     for (i=0 ; i < persons.length; i++){
      createLi(persons[i]);
   }
   }
})

/* MISSION 17 - very challenging challenge:
   Remove class "hide" from "shuffle all"
   button in about.html.
   Use the button to clear the innerHTML of <ul>,
   to point allLi array to [] again (so the array
    should not be "const"),
   to shuffle (change order) of the objects
   in the array "persons" and to show all the new <li>
   in accordance with the new order.

   10 points
*/
const shuffleAll = document.querySelector("#shuffle");
shuffleAll.classList.remove("hide");

shuffleAll.addEventListener("click", () => {
   shuffleArray(persons);
   for (i=0 ; i < persons.length; i++){
      while(allLi.length > 0) {
         allLi.pop();
         spanValue.removeChild(spanValue.lastChild);
     }
     for (i=0 ; i < persons.length; i++){
      createLi(persons[i]);
   }
   }
})





