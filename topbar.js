window.onscroll = function() {
    var nav = document.getElementsByTagName('top-bar')[0];
    if (window.pageYOffset > nav.offsetTop) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  };