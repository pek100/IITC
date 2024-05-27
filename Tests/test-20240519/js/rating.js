/** You can see at "HOME" screen, how this app
 * should look in the end
 * 
 * אפשר לראות למטה במסך הבית איך האפליקציה
 * הזאת אמורה להיראות בסוף
 */



/** MISSION 01:
 * 
 * Create 4 "const":
 *  - for the span of "value"
 *  - for the 3 buttons("decrease","reset","increase") 
 *
 * 
 * Take the selectors from the lines 35-40 of rating.html
 * 
 * 5 points
 * 
 */

const spanValue = document.querySelector("#value");
const decBtn = document.querySelector(".decrease");
const resBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".increase");

/** MISSION 02: 
 * Create global variable "count" and set it's value to 0
 * 
 * 1 point
*/
let count = 0;

/** MISSION 03: 
 * -- Create function (arrow or regular) showCount()
 *    that 
 *    1. shows the "count" value in the span "value"
 *    2. removes from the span "value" all the color
 *       classes: "green", "white" and "red"
 *    3. checks if the "count" is greater than 0,
 *       and if it is, uses class "green" on the span "value"
 *       to color it "green"
 *    4. otherwise, checks if the "count" is smaller than 0,
 *       and if it is, uses class "red" on the span "value"
 *       to color it "red"
 *    5. otherwise, uses class "white" on the span "value"
 *       to color it "white"
 * 
 *    (6. BONUS 3 points - you could use TERNARY OPERATOR
 *        inside TERNARY OPERATOR for the 3.4.5. parts of the mission)
 * 
 * -- Use this function once immediately to show the initial
 *    value on the beginning
 * 
 * 16 points
*/
function showCount(){
    spanValue.innerHTML = count;
    spanValue.classList.remove("green","white","red");

    count > 0 ? spanValue.classList.add("green")
    :count < 0 ? spanValue.classList.add("red")
    :spanValue.classList.add("white")
}
showCount();




/** MISSION 04: 
 * 
 * Add listener for each button (3 listeners in total)
 * on the event "click" and create anonimous
 * (regular or arrow) callback function
 * for each.
 * 
 * 1. For "decrease" button - function
 *    that subtracts 1 from "count" and uses showCount()
 * 2. For "increase" button - function
 *    that adds 1 to "count" and uses showCount()
 * 3. For "reset" button - function
 *    that sets "count" to be 0 and uses showCount()
 *
 * Ensure that everything works.
 * 
 * 13 points 
 */

decBtn.addEventListener("click", () => {count--; showCount();});
incBtn.addEventListener("click", () => {count++; showCount();})
resBtn.addEventListener("click", () => {count=0; showCount();})



