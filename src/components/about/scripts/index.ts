import { Slider } from "./slider";


const options = { childList: true, subtree: true };

const observer = new MutationObserver(function(mutations) {
  const elem: HTMLElement | null = document.querySelector('.about');
  if (document.contains(elem)) {
    const slider: Slider = new Slider("projects-slider", {
      focusPosition: "center", 
      animConfig: {
        duration: 1,
        easing: 'ease-out'
      }, 
      slideshowConfig : {duration: 6}
    });

    slider.play();
        
  }
});

observer.observe(document.body, options);