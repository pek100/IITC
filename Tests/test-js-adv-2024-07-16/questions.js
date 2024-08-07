/***************************  51 TASKS *************************/
/***************************  51 TASKS *************************/
/***************************************************************/
/* The questions signed as CHALLENGE - are the BONUS questions */
/***************************************************************/
/***************************************************************/
/*  The tasks without CHALLENGE together - 100 points in total */
/*  You could get some of your points, solving the CHALLENGES  */
/*  instead of some other questions                            */
/***************************************************************/
/***************************************************************/

/* QUESTION NUMBER: 001 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: In which order the outputs would be printed by the next code?


setTimeout(() => {

    console.log('a');

    setTimeout(() => {
        console.log('b')
    },1000);

    console.log('c');

    setTimeout(() => {
        console.log('e')
    },0)

    console.log('d')

},900000)

*/

/* ANSWERS:
a) a, b, c, d, e
b) a, b, c, e, d
c) a, c, e, d, b
    //* d) a, c, d, e, b
*/

/* QUESTION NUMBER: 002 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ /* 3 points */
/** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
/* QUESTION: CHALLENGE: Write a function that accepts an array and 
returns a new array with duplicate elements removed, 
using the spread operator.
*/

/* INITIAL CODE */

const arWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arWithoutDuplicates =[...new Set(arWithDuplicates)];
console.log(arWithoutDuplicates);

/* QUESTION 003 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ /* 3 points */
/* QUESTION: Create a function named earlyBird(event) 
that shows in the console "Early to <event>", 

and a function named lateComer(event) that shows in the console 
"Late to <event>". 

Create also a function attendEvent(callback) that writes in the console 
"Checking event timing...", runs setTimeout for 1.5 seconds, 
randomly selects an event from the array and uses the callback with the selected event.
Run attendEvent twice, first with the argument of earlyBird, 
and the second time with the argument of lateComer.
*/

const events = ['meeting', 'party', 'concert', 'class', 'game'];

function earlyBird(event) {
    console.log(`Early to ${event}}`);
}

function lateComer(event) {
    console.log(`Late to ${event}}`)
}

function attendEvent(callback) {
    console.log("Checking event timing...")
    setTimeout(() => {
        const randomEvents = events[Math.floor(Math.random() * events.length)]
        callback(randomEvents);
      },1500)
}

attendEvent(earlyBird);
attendEvent(lateComer);

/* QUESTION NUMBER: 004 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: Which of the following is true about recursive functions? */

/* ANSWERS:
a) They are always faster than iterative solutions
b) They cannot return values
    //* c) They must have a termination condition to avoid infinite recursion
d) They are used only for mathematical operations
*/

/* QUESTION NUMBER: 005 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create an object instance of the Square class 
     with a side of 7. Print out the perimeter of the square 
     using the perimeter method. */
     
  /* INITIAL CODE: */
  class Square05 {
      constructor(side) {
          this.side = side;
    }
    
    perimeter() {
      return 4 * this.side;
    }
  }

const square = new Square05(7);

console.log(`square Perimeter: ${square.perimeter()}`);
  
  /* QUESTION NUMBER: 006 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
  /* QUESTION TYPE: Code */ /* 3 points */ 
  /** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
  /* QUESTION: CHALLENGE: Create recursive function sumDigits
  that gets a number and sums all it digits
  and if the result is not one-digit number, it sums them again */  
  
  /* INITIAL CODE: */
  
    function sumDigits(n) {
        if (n < 10) return n;
        return (n % 10) + sumDigits(Math.floor(n / 10));
    }

console.log(sumDigits(5612304));

/* QUESTION NUMBER: 007 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 3 points */
/* QUESTION: In which order the numbers would be printed?
console.log(1);

setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
    }, 400);
}, 500);

console.log(4);

setTimeout(() => {
    console.log(5);
    setTimeout(() => {
        console.log(6);
    }, 100);
}, 100);

console.log(7);
*/

/*
Answers:
    //* 1. 1, 4, 7, 5, 6, 2, 3
2. 1, 4, 7, 2, 3, 5, 6
3. 1, 4, 7, 5, 2, 6, 3
4. 1, 4, 7, 2, 5, 6, 3
*/

/* QUESTION NUMBER: 008 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ /* 3 points */
/** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
/* QUESTION: CHALLENGE Write a function that prints 'JavaScript is fun!' 
ten times with 2 second intervals using setTimeout.
Store the timeout IDs in an array named timeoutArray.
After the tenth print, clear all the timeouts using clearTimeout.
Define the function named startPrinting. */

/* INITIAL CODE: */
const timeoutArray1 = [];
function startPrinting(n) {
        if (n > 0) {
            console.log("JavaScript is fun!");
            const timeoutId = setTimeout(() => {
                startPrinting(n - 1);
            }, 2000);
            timeoutArray1.push(timeoutId);
        }else{
            timeoutArray1.forEach(i => clearTimeout(i));
        }
    }

startPrinting(10);


/* QUESTION NUMBER: 009 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* /* QUESTION: What is the main purpose of using callbacks in JavaScript?
*/

/* ANSWERS:
a) To execute code immediately without any delay.
    //* b) To handle asynchronous operations and execute code after a task completes.
c) To improve the performance of synchronous code execution.
d) To create loops and iterate over arrays.
*/

/* QUESTION NUMBER: 010 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a class 'Student10' with properties 'name' and 'grade'. 
Add a method 'getDetails' that returns a string combining 
the name and grade. */

/* INITIAL CODE */
class Student10 {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name} __ Grade: ${this.grade}`;
    }
}

const student = new Student10("Michael", 100);
console.log(student.getDetails());

/* QUESTION NUMBER: 011 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Given three variables, x11, y11, and z11, 
assign the minimum of the three to the variable minNum11. 
Write the code using nested ternary operators. */

/* INITIAL CODE */

let x11 = 4, y11 = 9, z11 = 7;
console.log((x11 < y11) ? ((x11 < z11) ? x11 : z11) : ((y11 < z11) ? y11 : z11));


/* QUESTION NUMBER: 012 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/**
 * QUESTION:
 * Destructure the array ['elephant', 'mouse', 'wolf', 'jaguar','cat','bear']
 * into variables animal121, animal122, animal123 and remainingAnimals12.
*/

/**
 * INITIAL CODE:
*/
const animals = ['elephant', 'mouse', 'wolf', 'jaguar', 'cat', 'bear'];
const [animal121, animal122, animal123, ...remainingAnimals12] = animals
console.log(animal121, animal122, animal123, remainingAnimals12);

/* QUESTION NUMBER: 013 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: What does the setTimeout() method do in JavaScript?
*/

/* ANSWERS:
a) Executes a function immediately and repeatedly at specified intervals.
    //* b) Executes a function only once after a specified delay.
c) Stops the execution of a function after a specified delay.
d) Executes a function repeatedly without any delay.
*/

/* QUESTION NUMBER: 014 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ /* 3 points */
/** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
/* QUESTION: CHALLENGE: Write a function that prints 'Start', waits for 1 second,
then prints 'Running', and repeats this sequence 3 times.
After the third sequence, print 'Finished' and clear all timeouts using clearTimeout.
Store the timeout IDs in an array named timeoutArray.
Define the function named runSequence. */

/* INITIAL CODE: */
const timeoutArray = [];
function runSequence(n) {
        if (n > 0) {
            console.log("Start");
            const timeoutId = setTimeout(() => {
                console.log("Running");
                runSequence(n - 1);
            }, 1000);
            timeoutArray.push(timeoutId);
        }else{
            timeoutArray.forEach(i => clearTimeout(i));
            console.log("Finished")
        }
    }

runSequence(3);

/* QUESTION NUMBER: 015 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: What will be logged to the console after executing 
the following code?
*/

const snacks = ['cookie', 'chips', 'fruit', 'candy', 'nuts'];

function showSnack(snack) {
    console.log(`Enjoy your ${snack}!`);
}

function refuseSnack(snack) {
    console.log(`No thanks, I don't want ${snack}.`);
}

function getSnack(callback) {
    console.log("Fetching a snack...");
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * snacks.length);
        const selectedSnack = snacks[randomIndex];
        callback(selectedSnack);
    }, 1500);
}

getSnack(showSnack);
getSnack(refuseSnack);

/* ANSWERS:
a) "Fetching a snack..." followed by "Enjoy your cookie!" 
and "Fetching a snack..." followed by "No thanks, I don't want cookie."
b) "Fetching a snack..." followed by "No thanks, I don't want fruit." 
and "Enjoy your candy!"
c) "Fetching a snack..." followed by "Enjoy your <some random snack>!"
and by "No thanks, I don't want <some random snack>."
    //* d) "Fetching a snack..." followed by "Enjoy your <some random snack>!"
    //* and "Fetching a snack..." followed by "No thanks, I don't want <some random snack>."
*/

/* QUESTION NUMBER: 016 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: How do you call a method of a parent class in JavaScript? */

/* ANSWERS:
a) parent.method()
    //* b) super.method()
c) this.parent.method()
d) this.super.method()
*/

/* QUESTION NUMBER: 017 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: What is the result of the expression 
let color17 = 'orange';
false ? 'Sure' : color17 !== 'orange' ? 'May be' : 'No' 
in JavaScript? */

/* ANSWERS:
a) 'Sure'
    //* b) 'No' 
c) false
d) 'May be'
*/

/* QUESTION NUMBER: 018 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/**
 * QUESTION:
 * What Will Return The Next Check For The Values Of The Next Array?
 * let reg18 = /[C\-E]/
 * reg18.test(str)
 * const ar18 = ['A Cat','Dog','Cat And Mouse','Eagle And Mouse','Big Bang']
*/

/* ANSWERS:
* a) false,true,true,false,false
* b) true,false,true,false,false
* c) false,false,true,true,false
* d) false,true,true,false,false
    //* true, false, true, true, false
*/

/* QUESTION NUMBER: 019 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a function named 'twoTimeouts' 
that logs "First!" after 1 second, 
and logs "Second!" after another 2 seconds
*/

/* INITIAL CODE */
function twoTimeouts() {
    setTimeout(() => {
      console.log("First")
      setTimeout(() => {
        console.log("Second")
      },1000)
    },1000)
}
twoTimeouts();

/* QUESTION NUMBER: 020 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: What is the output of the following code snippet?  
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2, 3)); */
/* ANSWERS:
a) 6
b) 8
c) 12
    //* d) 16
*/

/* QUESTION NUMBER: 021 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: Which keyword is used to inherit properties 
from another class in JavaScript? */

/* ANSWERS:
a) extend
b) inherit
c) super
//* d) extends
*/

/* QUESTION NUMBER: 022 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a class called Animal22. Add a constructor 
that takes in the parameters name, species and color. 
Initialize the properties name, species and color with 
the corresponding parameters 
in the constructor. Add a method called "describe" that prints 
  'The [name] is a [species] and it is [color]' using 
  the values of the properties. 
  Create an instance of Animal with the name 'Tiny', species 'elephant' 
  and color 'gray'. 
  Call the describe method. */
    
  /* INITIAL CODE: */
  
  // your code
  class Animal22 {
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    }

    describe() {
        return `The ${this.name} is an ${this.species} and it is ${this.color}`;
    }
}

const animal = new Animal22("Tiny", "elephant", "gray");
console.log(animal.describe());
  
  /* QUESTION NUMBER: 023 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
  /* QUESTION TYPE: Debug */ /* 2 points */
  /* QUESTION: Fix the code that uses a function to check if any string 
  of the given array contains the word 'JavaScript' at the beginning. */
  
/* INITIAL CODE: */
const str23_first = ['Or Python or JavaScript','JavaScript is a powerful language',
'JS is developing and advancing','I like JS'];
const str23_second = ['Or Python or JavaScript','JAVASCRIPT is a powerful language',
'JS is developing and advancing','I like JS'];

function checkIfAnyBeginsWithJavaScript(ar) {
  let regexp23 = new RegExp("^JavaScript");
  //! return ar.every(str => regexp23.test(str));
  return ar.some(str => regexp23.test(str)); //? changed "every" to "some"
}

console.log(checkIfAnyBeginsWithJavaScript(str23_first));
console.log(checkIfAnyBeginsWithJavaScript(str23_second));

/* QUESTION NUMBER: 024 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Write a function to check if a string starts with 
a vowel (a, e, i, o, u, in lowercase or uppercase). */

/* INITIAL CODE: */

const str24 = ['sour','SWEET','aMAZING','OBVIOUS','Awesome','usual','Imaginative','Real']

const regex6 = /^(a|e|i|o|u)/i;

function startsWithVowel(str) {
  return (regex6.test(str)) ? `"${str}" starts with the vowel - ${str[0]}` : `"${str}" doesn't start with a vowel`;
}

str24.forEach(str => console.log(startsWithVowel(str)));


/* QUESTION NUMBER: 025 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 3 points */ 
/* QUESTION: Create a function named 'onDocLoad25' 
that changes the emojee on the button to 😐 after 1.5 seconds 
after the document loads,
and after that performs one more change 2.5 seconds later - to 😒,
and after that performs one more change 2 seconds later - to 😢. 
Use it with listener that is added to the document 
for the "DOMContentLoaded" event, 
and to the listener of btnStop25 add arrow function 
that enables us to cancel 
the series of the changes at any step - no matter when we click the button. 

*/

const btnStop25 = document.querySelector('#q025 > .btn');
let timerId1, timerId2, timerId3;

function onDocLoad25() {
  timerId1 = setTimeout(() => {
    btnStop25.innerHTML = "😐";
    timerId2 = setTimeout(() => {
      btnStop25.innerHTML= "😒";
      timerId3 = setTimeout(() => {
        btnStop25.innerHTML= "😢";
      },2000)
    },2500)
  },1500)

}

document.addEventListener('DOMContentLoaded', onDocLoad25);
btnStop25.addEventListener('click', () =>  {
clearTimeout(timerId1);
clearTimeout(timerId2);
clearTimeout(timerId3);
});

//document.addEventListener();
//btnStop25.addEventListener();

/* QUESTION NUMBER: 026 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: MCQ */ /* 2 points */
/** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
/* QUESTION: CHALLENGE: What is the output of the following code snippet?  
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(48, 18)); */
/* ANSWERS:
a) 6
    //* b) 18
c) 48
d) 0
*/

/* QUESTION NUMBER: 027 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a regex pattern to match several specific 
file extensions in a string, 
like ".doc", ".xls", ".jpg", ".png", ".pdf". Use group notation () */

/* INITIAL CODE: */
let reg27 = /\.(doc|xls|jpg|png|pdf)/


/* QUESTION NUMBER: 028 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/**
 * QUESTION:
 * Destructure the following object to obtain the values of its properties:
*/

/**
 * INITIAL CODE:
*/

const student28 = { name28: 'Mary', familyName: 'Smith', birthYear: 2005, 
faculty: 'Computer Sciences' }

const { name28, familyName, birthYear, faculty } = student28;

console.log(`Name: ${name28} | Family Name: ${familyName} | Birth Year: ${birthYear} | Faculty: ${faculty}`);

/* QUESTION 029 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: use \d,\D,\w,\w,\s or \S to hide all the digits in
the phones by asterisks "*" - use map to create "hiddenPhones" array */

const phones = ['053-456-66-77', '055-123-23-23', '055-555-5555', '09-678-6789'];

const regex5 = /\d/g;

const hiddenPhones = phones.map(i => i.replace(regex5, "*"));
console.log(hiddenPhones);

/* QUESTION NUMBER: 030 */ /* LANGUAGE: JS */ /* DIFFICULTY: easy */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: What is the result of the following expression?
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); */

/* ANSWERS:
a) [[1, 2, 3], 4, 5]
b) [1, 2, 3, [4, 5]]
c) [1, 2, 3, [...arr1, 4, 5]]
    //* d) [1,2,3,4,5]
*/

/* QUESTION NUMBER: 031 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 3 points */
/* QUESTION: Write a program that prints "Tick" every second 
and "Tock" every second after "Tick", alternating. 
Stop the interval after 10 seconds. */

/* INITIAL CODE: */
let counter31 = 0;

const intervalId = setInterval(() => {
  if (counter31 % 2 === 0) {
    console.log("Tick");
  } else {
    console.log("Tock");
  }
  counter31++;
  
  if (counter31 >= 10) {
    clearInterval(intervalId);
  }
  
}, 1000);



/* QUESTION NUMBER: 032 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: How can stack overflow be avoided in a recursive function? */
/* ANSWERS:
//* a) By ensuring there is a base case that will terminate the recursion
b) By using more complex algorithms
c) By increasing the stack size
d) By avoiding the use of function arguments
*/

/* QUESTION NUMBER: 033 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */ /* 2 points */
  /* QUESTION: Fix the code, creating todayJourney72 object and
     using its avgSpeed() method */
     
     /* INITIAL CODE: */

     const todayJourney33 = {
        from: ['City A', 'City B'],
        to: ['City B', 'City A'],
        distanceKM: [50, 50],
        timeHour: [1, 1.2],
        //! avgSpeed: () => {
        avgSpeed: function () { //? changed to a regular func
            let totalDistance = this.distanceKM.reduce((total, dist) => total + dist);
            let totalTime = this.timeHour.reduce((total, time) => total + time);
            return (totalDistance / totalTime).toFixed(2);
           }
       }
       
       console.log(`Average speed: ${todayJourney33.avgSpeed()}`);
       
       /* QUESTION NUMBER: 034 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
       /* QUESTION TYPE: Code */ /* 3 points */
       /* QUESTION: Array contains months, go over the array, use
       nested ternary operator and change the colors in the array //? error? my understanding: match month to season..
       to their seasons: if it belongs to the array "summer",
       change it to "summer", etc. 
       */
      
      /* INITIAL CODE */
      
      const spring = ['March','April','May']
      const summer = ['June','July','August']
      const autumn = ['September','October','November']
      const winter = ['December','January','February']
      const months34 = ['January','December','December','July','March',
      'November','November','July']

      const monthsSeasons = months34.map((month) => {
        const season = (spring.includes(month)) ? 'spring' : (summer.includes(month)) ? 'summer' : (autumn.includes(month)) ? 'autumn' : 'winter';
        return { month, season };
    });

    monthsSeasons.forEach(({ month, season }) => {console.log(`${month}: ${season}`)});
      
      /* QUESTION NUMBER: 035 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
      /* QUESTION TYPE: Code */ /* 3 points */
      /** CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE-CHALLENGE **/
      /**
       * QUESTION:
       * CHALLENGE: Given a nested array,
       * destructure the elements 'pink', 'yellow' and 'red' 
       * into three separate variables with the names corresponding
       * to the names of the colors.
      */
     
     /**
      * INITIAL CODE:
     */
    
    const arr35 = ['white', 'blue', ['brown','pink'], 'red' ,['green', 'yellow', 'black']];
    const [, , [, pink], red, [, yellow]] = arr35;
    console.log(pink, red, yellow);
    
    /* QUESTION 036 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
    /* QUESTION TYPE: Code */ /* 2 points */
    /* QUESTION: 
    
    Replace all instances of "o" and 'i' in any case with "X" in each word
    and create the resulting array using map().
    */
   
   const words = ['Hello', 'Good', 'Morning', 'World', 'O-lala','Ai!'];
   
   const regex3 =/o|i/i

   const replacedWords = words.map(i => i.replace(regex3, "X"));
   console.log(replacedWords);
   
   /* QUESTION NUMBER: 037 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
   /* QUESTION TYPE: Code */ /* 3 points */
   /* QUESTION: Write a program that prints numbers from 7 to 1 
   with an interval of 2 seconds 
   using setInterval. After reaching 1, print 'Liftoff!' and stop the interval. */
   
   /* INITIAL CODE: */
   let count37 = 7;

    const countDown = setInterval(() => {
        if (count37 > 1) {
            console.log(count37);
            count37--;
        } else {
            console.log('Liftoff!');
            clearInterval(countDown);
        }
    }, 2000); 

   
   /* QUESTION NUMBER: 038 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
   /* QUESTION TYPE: MCQ */ /* 2 points */
   /* QUESTION: What is the main advantage of using recursion? */
   
   /* ANSWERS:
   //* a) It simplifies the code for problems 
   that can be broken down into smaller, similar problems
   b) It always executes faster than iterative solutions
   c) It uses less memory than iterative solutions
   d) It prevents stack overflow errors
   */
  
  /* QUESTION NUMBER: 039 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
  /* QUESTION TYPE: Code */ /* 2 points */
  /* QUESTION: Write a regular expression that matches a string that starts with 'cat' or ends with 'dog' in lower case.  */
  
  /* INITIAL CODE: */
  let reg39 = /^cat|dog$/

  /* QUESTION NUMBER: 040 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
  /* QUESTION TYPE: Code */ /* 3 points */
  /**
   * QUESTION:
   * Create a function `calculateAvg()` that takes any number of arguments
   * and returns their average, using the rest operator.
  */
 
 /**
  * INITIAL CODE:
 */

function calculateAvg(...num) {
    const sum = num.reduce((acc, num) => acc + num, 0);
    const average = sum / num.length;
    return average;
}

console.log(calculateAvg(7, 8, 9, 0));
console.log(calculateAvg(-1, 0.5, 20, 23, 7));

/* QUESTION NUMBER: 041 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */ /* 2 points */
/* QUESTION: Fix the code that should check if a string contains only uppercase letters. */

/* INITIAL CODE: */
//! const regex41 = /[A-Z]/;
const regex41 = /^[A-Z]+$/ //?fix
const str41 = 'HELLO';
console.log(regex41.test(str41));

/* QUESTION NUMBER: 042 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Given three arrays 
arr421 = [1, 2], 
arr422 = [3, 4] 
and 
arr423 = [5, 6] 
create a new array newArr42 that combines the elements of both arrays 
using the spread operator. */

/* INITIAL CODE */

const arr421 = [1, 2];
const arr422 = [3, 4];
const arr423 = [5, 6];
const newArr42 = [...arr421, ...arr422, ...arr423];
console.log('newArr42: \n', newArr42);

/* QUESTION NUMBER: 043 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a function that prints 'Ping!' every 4 seconds 
using setInterval.
Stop the interval after 12 seconds. */

/* INITIAL CODE: */
function printPing() {
let counter = 0;

const intervalId = setInterval(() => {
    console.log("Ping!");
  if (counter >= 3) { //? 3*4 = 12 seconds
    clearInterval(intervalId);
  }
  
}, 4000);


}
printPing();

/* QUESTION NUMBER: 044 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/* QUESTION: Which of the following 
is an example of an infinite recursion? */

/* ANSWERS:
a) function infiniteRecursion(n) { if (n <= 0) return; infiniteRecursion(n - 1); }
b) function infiniteRecursion(n) { if (n > 0) return; infiniteRecursion(n + 1); }
c) function infiniteRecursion() { console.log("End"); }
    //* d) function infiniteRecursion() { infiniteRecursion(); }
*/

/* QUESTION NUMBER: 045 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 2 points */
/* QUESTION: Create a parent class Animal45 with properties name and sound. 
Add a method getInfo() that returns the name and sound of the animal. 
Also, create a child class Cat45 that extends Animal45 and 
add a method meow() that returns the value of the property "sound". */

/* INITIAL CODE: */

class Animal45 {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    getInfo() {
        return `name: ${this.name} | sound: "${this.sound}".`;
    }
}

class Cat45 extends Animal45 {
    constructor(name) {
        super(name, 'meow');
    }
    meow() {
        return this.sound;
    }
}

const cat = new Cat45('Josh');

console.log(cat.getInfo());
console.log(cat.meow());

/* QUESTION NUMBER: 046 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Code */ /* 3 points */
/**
 * QUESTION:
 * Create a function `concatNoLemon()` that takes any number of 
 * string arguments
 * and returns them concatenated to one string, using the rest operator.
 * Do not concatenate 'lemon'
*/

/**
 * INITIAL CODE:
*/

function concatNoLemon(...stringArgs) {
    const filteredArgs = stringArgs.filter(i => i.toLowerCase() !== 'lemon');

    const result = filteredArgs.join('');

    return result;
}

console.log(concatNoLemon('melon','watermelon','orange', 'lemon'));
console.log(concatNoLemon('grapes', 'lemon', 'date', 'persimmon', 'pomegranate'));

/* QUESTION NUMBER: 047 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: MCQ */ /* 2 points */
/**
 * QUESTION:
 * What will return the next check for the values of the next array?
 * /^[%?A-C]/.test(str)
 * const ar86 =  ['A cat','The Dog','%new name%','The % of them is big','Big Bang']
*/

/* ANSWERS:
* a) true,false,true,true,false
* b) false,true,false,true,false
    //* c) true,false,true,false,true
* d) false,false,true,false,true
*/

/* QUESTION NUMBER: 048 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Debug */ /* 2 points */
/* QUESTION: Fix the code that adds a method called "calculateArea" 
to the Square class which calculates and returns 
the area of the square. */

/* INITIAL CODE: */
class Square48 {
    constructor(side) {
        this.side = side;
    }
    
    calculateArea() {
        //! return this.side * side;
        return this.side * this.side;
    }
}

const square1 = new Square48(4);
console.log("Square Area: " + square1.calculateArea());


/* QUESTION NUMBER: 049 */ /* LANGUAGE: JS */ /* DIFFICULTY: medium */
/* QUESTION TYPE: Code */ /* 3 points */
/* QUESTION: Write a program that prints the current date 
and time every second.
Stop printing after 5 seconds. Use setTimeout for this. */

/* INITIAL CODE: */
let count = 0;

let intervalId49 = setInterval(() => {
    console.log(new Date().toLocaleString());
    count++;
    if (count >= 5) {
        clearInterval(intervalId49);
    }
}, 1000); 

/* QUESTION NUMBER: 050 */ /* LANGUAGE: JS */ /* DIFFICULTY: hard */
/* QUESTION TYPE: Debug */ /* 3 points */
/* QUESTION: Fix this recursive function that should reverse a string. */

/* INITIAL CODE: */

//! function reverseString(str) {
//!     if (str === "") return "";
//!     return str[0] + reverseString(str.slice(1));
//! } 
//! console.log(reverseString("hello"));

function reverseString(str) {
    if (str === "") return "";
    return str[str.length - 1] + reverseString(str.slice(0, -1));
} 
console.log(reverseString("hello"));



/**** MISSION 51: upload the test to panda.knowledger.guru (2 points) */
/********************************************************* */


