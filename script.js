const title = document.getElementById('title');
const btn = document.getElementById('mybtn');

btn.addEventListener('click', function() { 
  title.textContent = 'JS працює! 🎉'; 
  title.style.color = 'teal';
   btn.textContent = 'Натиснуто ✓'; 
  btn.style.background = 'teal';   
btn.style.color = 'white'; });