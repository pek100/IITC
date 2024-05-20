const foods = ['pizza', 'pasta', 'mac-and-cheese', 'falafel', 'hummus', 'jachnun', 'sabih'];
const drinks = ['wine', 'beer', 'martini', 'water', 'wodka', 'tea', 'cola'];

const meals = foods.map((food, index) => {
  return { food: food, drink: drinks[index] };
});

console.log(meals);
