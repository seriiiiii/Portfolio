document.addEventListener("DOMContentLoaded", function () {
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      cursorChar: '|',
    });
  }

  document.getElementById("scrollButton").addEventListener("click", function (event) {
    event.preventDefault();
    smoothScrollTo(750);
  });


  function smoothScrollTo(targetY) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 300;
    let startTime = null;

    function scrollAnimation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  }
});
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "qKhPJrxFgALotOTdl",
  });
})();
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('seriiiiiip@gmail.com', 'template_2mw74lq', this)
      .then(() => {
        alert('메일 전송에 성공했습니다!');
      }, (error) => {
        alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
      });
  });
}
document.getElementById('menu-toggle').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
});
