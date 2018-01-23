window.app = () => {
  let scrollY = 0;
  let header = document.getElementsByClassName('navbar')[0];

  window.onscroll = e => {
    if (window.scrollY === 0) {
      header.classList.add('clear');
      header.classList.remove('invisible');
    } else {
      header.classList.remove('clear');
      if (window.scrollY > scrollY) {
        header.classList.add('invisible');
      } else {
        header.classList.remove('invisible');
      }
    }

    scrollY = window.scrollY;
  };
};

window.app();
