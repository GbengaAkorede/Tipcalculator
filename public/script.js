const draggableButton = document.getElementById('draggable-button');
const priceDisplay = document.getElementById('price');
const viewsDisplay = document.getElementById('views');
let isDragging = false;

// Add event listeners to start and stop dragging
draggableButton.addEventListener('mousedown', () => {
  isDragging = true;
  draggableButton.style.transition = 'none';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableButton.style.transition = 'all 0.3s ease';
});

// Listen for mousemove events and update the price accordingly
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const xPosition = e.clientX - draggableButton.offsetWidth / 2;
    const price = Math.max(10, Math.min(100, Math.round(xPosition / 4)));
    const views = Math.max(10, Math.min(1000, Math.round(xPosition / 10)));
    
    draggableButton.style.left = xPosition + 'px';
    priceDisplay.textContent = `$${price.toFixed(2)}` + " ";
    viewsDisplay.textContent = `${views}` + " ";
  }
});
