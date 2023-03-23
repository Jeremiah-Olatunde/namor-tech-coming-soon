import type { Slider } from "./slider";

//variable that stores the curr slide_no; zero onload
export let slide_no = 0;

// export let clicked = false;


export function detect_hex_click(slider: Slider) {
  const hex_elem_arr = Array.from(document.querySelectorAll('.about .hex-content')) as HTMLElement[];
  // Registering listeners on the elements
  hex_elem_arr.forEach(element => {
    element.addEventListener('click', () => {
      element.style.transform = `rotateY(360deg)`;
      element.style.transition = `transform 1.5s ease-in-out`;

      setTimeout(() => {
        element.style.transform = `rotateY(0deg)`;
        slide_no = hex_elem_arr.findIndex(value => value === element);
        slider.jumpToSlide(slide_no);
      }, 1500);
  
    });
  })
  
}