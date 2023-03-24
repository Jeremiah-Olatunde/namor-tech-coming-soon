import { Slider } from "./slider";
import {detect_hex_click} from "./sync";

const options = { childList: true, subtree: true };

let timerID_arr: number[] = [0,0];  

const observer = new MutationObserver(function(mutations) {
  const about: HTMLElement | null = document.querySelector('.about');
  if (document.contains(about)) {
    const carousel = document.querySelector('.carousel') as HTMLElement;

    // initiliazes the slider and begins the slideshow after 6 seconds.
    const slider: Slider = new Slider("projects-slider", {
      focusPosition: "center", 
      animConfig: {
        duration: 1,
        easing: 'ease-out'
      }, 
      slideshowConfig : {duration: 6}
    });

    slider.play();
    slider.pause();

    // Register a TouchEvent Listener on the slider that allows the user to 
    // slide manually; enable the snapping feature
    let startX: number = 0;
    let offsetX: number = 0;
    let translateX: number = 0;

    //function to extract the translateX value from the transform matrix
    function getTranslateX(element: HTMLElement) {
      const style = getComputedStyle(element);
      const matrix = new DOMMatrixReadOnly(style.transform)
      return matrix.m41;
    }

    carousel.addEventListener("touchstart", (event) => {
      startX = event.changedTouches[0].clientX;
      translateX = getTranslateX(carousel);
    })

    carousel.addEventListener("touchmove", (event) => {
      event.preventDefault();
      offsetX = event.changedTouches[0].clientX - startX;
      carousel.style.transform = `translateX(${translateX + offsetX}px)`;
    })

    carousel.addEventListener("touchend", (event) => {
      const curr_target = event.target as HTMLElement;
      const focus_width: number = curr_target.offsetWidth;

      if ((offsetX < 0) && (offsetX <= -focus_width/2.7) && (slider.currentSlideNo() !== slider.totalSlides())) {
        slider.jumpToSlide(slider.currentSlideNo() + 1);
        
      }

      else if ((offsetX >= focus_width/2.7) && (slider.currentSlideNo() !== 0)) {
        slider.jumpToSlide(slider.currentSlideNo() - 1);
      } else {
        slider.jumpToSlide(slider.currentSlideNo());
      }

      offsetX = 0;
    })

    // Add an event listener to the pagination icons, in order to navigate through the slider
    const page_icons: HTMLElement[] = Array.from(document.querySelectorAll('.circle'));
    page_icons.forEach((elem) => elem.addEventListener('click', (event) => {
      let slide_no = page_icons.findIndex(value => event.target == value);
      slider.jumpToSlide(slide_no);
    }));

    // initializing important variables for the info animation
    const info_icon = document.getElementById('info-icon') as HTMLElement;
    const image_desc_arr = Array.from(document.querySelectorAll('.image-title')) as HTMLElement[];
    const image_info_arr = Array.from(document.querySelectorAll('.image-info')) as HTMLElement[];

    // initializing a Resize observer to constantly fire whenever the size of the image info changes
    const resize = new ResizeObserver(entries => {
      entries.forEach(entry => {

      //calculates the translation amount before setting the display to none;
      const translatey_arr = image_info_arr.map((value) => value.getBoundingClientRect().height) as number[];

      let image_info: HTMLElement;
      let image_desc: HTMLElement;
      let img: HTMLElement;
      
      timerID_arr[0] = setInterval(() => {
        if (document.contains(about)) {
          image_info = document.querySelector('.item[data-focus] .image-info') as HTMLElement;
          image_desc = document.querySelector('.item[data-focus] .image-title') as HTMLElement;
          image_desc.style.display = `block`;
          img = document.body.querySelector('.item[data-focus] img') as HTMLElement;
        }
      });
      
      // function to translate the elements by their respective values and then set the 
      // display to none after 
      function translateY() {
        image_desc_arr.forEach((elem, index) => {
        elem.style.transform = `translateY(${translatey_arr[index] + parseFloat(getComputedStyle(image_info_arr[index]).marginTop)}px)`;
        if (slider.currentSlideNo() != index) {
          elem.style.display = `none`; 
          image_info_arr[index].style.marginTop = `2rem`;
        }

        });
      }

      translateY();

      // Initialize variables;
      const icon_links = document.body.querySelector('.icon-list') as HTMLElement;

      // Adds an event listener to the info-icon; this brings up more text, 
      // blurs the image and sets the display of the socials to none 
      info_icon.addEventListener('click', () => {
        image_desc.style.transition = `transform 1s ease-out`;
        image_info.style.marginTop = `0.7rem`;
        image_desc.style.transform = `translateY(${0})`;

        //remove the icon-links
        icon_links.style.display = `none`;

        // dim image
        img.style.filter = `brightness(0.5)`;
      });

      // Adds an event listener to the focus_element; this lowers the text when any area
      // in it is clicked
      carousel.addEventListener('click', () => {

        image_info.style.marginTop = `2rem`;
        translateY();

        // bring back the icon-links
        icon_links.style.display =`flex`;

        //unblur the image
        img.style.filter = `brightness(1)`;
        });

      });
      
    }); 

    for (const elem of image_info_arr) {
      // console.log(elem);
      resize.observe(elem);
    }

    // Synchronize the hexagons to the slider
    detect_hex_click(slider);


  } else {
    clearInterval(timerID_arr[0]);
  }
});

observer.observe(document.body, options);




// Register a TouchEvent Listener on the slider that allows the user to 
      // slide manually; enable the snapping feature
      // let startX: number;
      // let offsetX: number;
      // let translateX: number = 0;
      
      // carousel.addEventListener("touchstart", (event) => {
      //   startX = event.targetTouches[0].clientX;
      // });
      
      // carousel.addEventListener("touchmove", (event) => {
      //   event.preventDefault();
      //   offsetX = event.targetTouches[0].clientX - startX;
      //   carousel.style.transform = `translateX(${translateX + offsetX}px)`;
      // });
      
      // carousel.addEventListener("touchend", (event) => {
      //   const curr_target = event.target as HTMLElement;
      //   const focus_width: number = curr_target.offsetWidth;

      //   console.log(`offsetX --> ${offsetX}`);
      //   console.log(`focus_width --> ${focus_width}`);

      //   // console.log(`startX : ${startX}, offsetX: ${Math.abs(offsetX)}`);
      //   // console.log(`Focus width --> ${focus_width}`);
      //   if ((offsetX < 0) && (offsetX <= -focus_width/2.7) && (slider.currentSlideNo() !== slider.totalSlides())) {
      //     slider.jumpToSlide(slider.currentSlideNo() + 1);
      //     translateX -= focus_width;
      //   } 
      //   else if ((offsetX >= focus_width/2.7) && (slider.currentSlideNo() !== 0)) {
      //     slider.jumpToSlide(slider.currentSlideNo());
      //     translateX += focus_width
      //   } else {
      //     console.log(slider.currentSlideNo());
      //     slider.jumpToSlide(slider.currentSlideNo());
      //     startX = 0; offsetX = 0;
      //   }
      // })