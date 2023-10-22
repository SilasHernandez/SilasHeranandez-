
function enlargeElement(element) {
    element.style.transform = 'scale(1.05)';
    element.style.transition = 'transform 0.2s';
  }
  
  function resetElement(element) {
    element.style.transform = '';
    element.style.transition = '';
  }
  // Get all elements with the ID "h"
var elements = document.querySelectorAll("#h");

// Attach event listeners to each element
elements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    enlargeElement(this);
  });

  element.addEventListener("mouseout", function () {
    resetElement(this);
  });
});

function enlargeElement(element) {
  element.style.transform = 'scale(1.05)';
  element.style.transition = 'transform 0.2s';
}

function resetElement(element) {
  element.style.transform = '';
  element.style.transition = '';
}

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    enlargeElement(card);
  });

  card.addEventListener('mouseout', function() {
    resetElement(card);
  });
});

