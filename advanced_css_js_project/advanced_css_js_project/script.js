// script.js - interactive behavior for carousel, quiz and API fetching
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (dark/light)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.textContent = 'Dark';
      localStorage.setItem('theme','light');
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      themeToggle.textContent = 'Light';
      localStorage.setItem('theme','dark');
    }
  });

  // Simple Carousel
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const autoToggle = document.getElementById('autoToggle');
  let index = 0;
  let auto = true;
  function moveTo(i){
    index = (i + slides.length) % slides.length;
    const width = track.getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * width}px)`;
  }
  prevBtn.addEventListener('click', ()=> moveTo(index - 1));
  nextBtn.addEventListener('click', ()=> moveTo(index + 1));
  window.addEventListener('resize', ()=> moveTo(index));
  let autoInterval = setInterval(()=> moveTo(index + 1), 3500);
  autoToggle.addEventListener('click', ()=>{
    auto = !auto;
    if (!auto) {
      clearInterval(autoInterval);
      autoToggle.textContent = 'Auto: Off';
      autoToggle.classList.add('muted');
    } else {
      autoInterval = setInterval(()=> moveTo(index + 1), 3500);
      autoToggle.textContent = 'Auto: On';
      autoToggle.classList.remove('muted');
    }
  });

  // Simple Quiz
  const quizData = [
    {q: "Which CSS layout is best for two-dimensional layouts?", a:["Flexbox","Grid","Bootstrap","Float"], correct:1},
    {q: "Which JS feature helps handle asynchronous code elegantly?", a:["Callbacks","Promises","Async/Await","setInterval"], correct:2},
    {q: "Which HTML tag is semantic for navigation?", a:["<div>","<nav>","<header>","<section>"], correct:1},
  ];
  let qIndex = 0, score = 0;
  const questionText = document.getElementById('questionText');
  const answersDiv = document.getElementById('answers');
  const nextBtnQ = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const resultCard = document.getElementById('resultCard');
  const questionCard = document.getElementById('questionCard');
  const scoreText = document.getElementById('scoreText');
  const backToQuiz = document.getElementById('backToQuiz');

  function renderQuestion(){
    const q = quizData[qIndex];
    questionText.textContent = `Q${qIndex+1}. ${q.q}`;
    answersDiv.innerHTML = '';
    q.a.forEach((ans, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = ans;
      btn.dataset.index = i;
      btn.addEventListener('click', selectAnswer);
      answersDiv.appendChild(btn);
    });
  }
  function selectAnswer(e){
    const chosen = Number(e.currentTarget.dataset.index);
    const correct = quizData[qIndex].correct;
    Array.from(answersDiv.children).forEach(b=>b.disabled=true);
    if (chosen === correct) {
      e.currentTarget.classList.add('correct'); score++;
    } else {
      e.currentTarget.classList.add('wrong');
      // mark correct
      answersDiv.children[correct].classList.add('correct');
    }
  }
  nextBtnQ.addEventListener('click', ()=>{
    qIndex++;
    if (qIndex >= quizData.length) {
      // show result
      questionCard.classList.add('hidden');
      resultCard.classList.remove('hidden');
      scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
    } else {
      renderQuestion();
    }
  });
  restartBtn.addEventListener('click', ()=>{
    qIndex = 0; score = 0; questionCard.classList.remove('hidden'); resultCard.classList.add('hidden'); renderQuestion();
  });
  backToQuiz.addEventListener('click', ()=>{
    qIndex = 0; score = 0; questionCard.classList.remove('hidden'); resultCard.classList.add('hidden'); renderQuestion();
  });
  renderQuestion();

  // Fetch joke API
  const fetchBtn = document.getElementById('fetchJoke');
  const jokeOutput = document.getElementById('jokeOutput');
  fetchBtn.addEventListener('click', async () => {
    jokeOutput.textContent = 'Loading...';
    try {
      const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
      if (!res.ok) throw new Error('Network response not ok');
      const data = await res.json();
      jokeOutput.innerHTML = `<strong>${data.setup}</strong><div style="margin-top:8px">${data.punchline}</div>`;
    } catch (err) {
      jokeOutput.textContent = 'Could not fetch joke. Try again later.';
      console.error(err);
    }
  });
});
