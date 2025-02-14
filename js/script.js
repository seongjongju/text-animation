const textAnimation = () => {
  const divs = document.querySelectorAll('.text-container div');
  const textContainer = document.querySelector('.text-container');

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    const divsTop = () => {
      divs.forEach((div) => {
        const divTop = div.getBoundingClientRect().top;
        const divBottom = div.getBoundingClientRect().bottom;

        if(divTop >= 0 && divBottom <= windowHeight) {
          div.classList.add('on');
        } else {
          div.classList.remove('on');
        }
      });
    };

    divsTop();
  });

};

textAnimation();

