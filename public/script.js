const draggableElement = document.getElementById("draggable1");
let isDragging = false;
let offset = { x: 0, y: 0 };

draggableElement.addEventListener("mousedown", (e) => {
  isDragging = true;
  offset.x = e.clientX - draggableElement.getBoundingClientRect().left;
  offset.y = e.clientY - draggableElement.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const container = document.querySelector(".draggable-area");

  const newX = e.clientX - container.getBoundingClientRect().left - offset.x;
  const newY = e.clientY - container.getBoundingClientRect().top - offset.y;

  draggableElement.style.left = `${newX}px`;
  draggableElement.style.top = `${newY}px`;
  // if (isDragging) {
  //   const xPosition = e.clientX - draggableButton.offsetWidth / 4;
  //   const price = Math.max(8, Math.min(36, Math.round(xPosition / 4)));
  //   const views = Math.max(10, Math.min(1000, Math.round(xPosition / 10)));
    
  //   draggableButton.style.left = xPosition + 'px';
  //   priceDisplay.textContent = `$${price.toFixed(2)}` + " ";
  //   viewsDisplay.textContent = `${views}K` + " ";
  // }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Prevent text selection during dragging
draggableElement.addEventListener("selectstart", (e) => {
  e.preventDefault();
});


// Listen for mousemove events and update the price accordingly
// document.addEventListener('mousemove', (e) => {
 
// });

var monthly = [8, 12, 16, 24, 36]
var result = []

var yearlyReduction  = (25 / 100);


monthly.forEach(function(value) {
  var reducedValue = value - (value * yearlyReduction);
  result.push(reducedValue);
});

console.log(result);