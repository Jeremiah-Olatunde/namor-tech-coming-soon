      // const map = new Map(Array.from(elements).map(elt => [elt, 0]));

      // for(const elt of elements) map.set(elt, findFitRatio(elt as HTMLElement));

      // function findFitRatio(elt: HTMLElement) {
      //   let fontSize = 0;

      //   while(true) {
      //     const styleObj = getComputedStyle(elt);
      //     fontSize = parseFloat(styleObj.fontSize);
      //     const height = parseFloat(styleObj.height);

      //     if(fontSize == height) elt.style.fontSize = `${fontSize + .1}px`;
      //     else {
      //       elt.style.fontSize = `${fontSize -= .1}px`
      //       break;
      //     };
      //   }

      //   return fontSize / parseFloat(getComputedStyle(elt).width);        
      // }

      const observer = new ResizeObserver((entries) => {
        for(const { target } of entries) {

          if(!(target instanceof HTMLElement)) return;
          target.style.wordBreak = "break-all";
          target.style.fontSize = "0px";

          while(true) {
            const styleObj = getComputedStyle(target);
            let fontSize = parseFloat(styleObj.fontSize);
            const height = parseFloat(styleObj.height);

            if(fontSize == height) target.style.fontSize = `${fontSize + .1}px`;
            else {
              target.style.fontSize = `${fontSize -= .1}px`
              break;
            };
          }
        }
      });

      // for(const elt of elements) observer.observe(elt);