window.app = () => {
  let pageY = 0;
  let header = document.getElementsByClassName('main-header--collected')[0];

  window.onscroll = e => {
    if (e.pageY === 0) {
      header.classList.add('clear');
      header.classList.remove('invisible');
    } else {
      header.classList.remove('clear');
      if (e.pageY > pageY) {
        header.classList.add('invisible');
      } else {
        header.classList.remove('invisible');
      }
    }

    pageY = e.pageY;
  };
};

window.app();
