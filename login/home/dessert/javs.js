
window.onscroll = function() {
  const scrollBtn = document.getElementById("Top");
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";  }
};
document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.getElementById("Top");
  scrollBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
document.addEventListener('DOMContentLoaded', function() {
const scrollBtn = document.getElementById('Top');
scrollBtn.addEventListener('click', function() {
  scrollBtn.style.backgroundColor = '#f2b8b8 '; 
  setTimeout(() => {
    scrollBtn.style.backgroundColor = 'rgb(237, 219, 219)'; 
  }, 1000);
});
scrollBtn.addEventListener('mouseenter',function() {
  scrollBtn.style.transform = 'scale(1.2)';
  scrollBtn.style.transition = 'transform 0.3s ease';
});
scrollBtn.addEventListener('mouseleave', function() {
  scrollBtn.style.transform = 'scale(1)';
});
});
document.addEventListener('DOMContentLoaded', function() {
const scrollBtn = document.getElementById('Top');
const colors = ['#ac3030', '#000000']; 
let index = 0;
setInterval(() => {
  scrollBtn.style.color = colors[index];
  index = (index + 1) % colors.length;
}, 3000);
});
