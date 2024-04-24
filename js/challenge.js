const counterNumber = document.getElementById("counter-number");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const likesContainer = document.getElementById("likes-container");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments");

let counter = 0;
let timerId;
let likes = {};
let comments = [];







function updateCounter() {
    counter++;
    counterNumber.textContent = counter;
    likes[counter] = likes[counter] || 0;
    likesContainer.innerHTML = Object.entries(likes)
      .map(([number, likeCount]) => {
        return `<li>${number} - Likes: ${likeCount}</li>`;
      })
      .join("");
  }
  
  function startTimer() {
    timerId = setInterval(updateCounter, 1000);
  }
  
  function stopTimer() {
    clearInterval(timerId);
  }
  
  // Start the timer when the page loads
  startTimer();




  function incrementCounter() {
    counter++;
    counterNumber.textContent = counter;
    likes[counter] = likes[counter] || 
