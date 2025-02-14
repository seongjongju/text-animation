//한문장씩
  const textAnimation = () => {
    const divs = document.querySelectorAll('.text-container div');
    const windowHeight = window.innerHeight;

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

  window.addEventListener('scroll', textAnimation);
//한문장씩

//한글자씩
const textAnimationTwo = () => {
  const oneTexts = document.querySelectorAll('.letter_container div');
  const windowHeight = window.innerHeight;
  console.log(oneTexts);

  oneTexts.forEach((oneText, oneTextIndex) => {
    const oneTextTop = oneText.getBoundingClientRect().top;
    const oneTextBottom = oneText.getBoundingClientRect().bottom;

    if(oneTextTop >= 0 && oneTextBottom <= windowHeight) {
      setTimeout(() => {
        oneText.classList.add('on');
      }, oneTextIndex * 20);
    } else {
      oneText.classList.remove('on');
    }
  });
};

window.addEventListener('scroll', textAnimationTwo);
//한글자씩