const random = (a, b) => a + Math.random()*b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () => 
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;
