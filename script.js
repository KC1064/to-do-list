
document.addEventListener('DOMContentLoaded', function () {
    var circle = document.querySelector('.circle');
    circle.addEventListener('click', function () {
      circle.classList.toggle('clicked');
    });
  });