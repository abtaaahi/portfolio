document.addEventListener("DOMContentLoaded", function() {
    function checkScreenSize() {
      if (window.innerWidth < 768) {
        document.getElementById('mobile-message').style.display = 'flex';
        document.body.style.overflow = 'hidden';
      } else {
        document.getElementById('mobile-message').style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });


document.addEventListener("scroll", function() {
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("sde").classList.add("blinking");
    }, 3500);
  });
  