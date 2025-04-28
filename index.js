/**
 * Given an element, looks within it for a score and buttons.
 * Binds click handlers to the buttons to increment the score.
 * @param {HTMLElement} element
 */
function bindButtons(element) {
  if (!element) {
    console.error("Element does not exist");
    return;
  }

  const scoreElement = element.querySelector(".score");
  if (!scoreElement) {
    console.error("Score element not found");
    return;
  }
  
  let score = parseInt(scoreElement.textContent) || 0;
  scoreElement.textContent=score;
  
  const buttons = element.querySelectorAll("button");
  buttons.forEach((button) => {
    const increment = parseInt(button.textContent)||1;
    button.onclick = () => {
      score += increment;
      scoreElement.textContent = score;
    };
  });
}


bindButtons(document.getElementById("homescore"))
bindButtons(document.getElementById("guestscore"))
