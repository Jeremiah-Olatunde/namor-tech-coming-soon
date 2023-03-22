const elements = document.querySelectorAll("[data-fit]");
const map = new Map(Array.from(elements).map(elt => [elt.textContent, 0]));

for(const elt of elements) map.set(elt.textContent, findFitRatio(elt as HTMLElement));

function findFitRatio(elt: HTMLElement) {
  elt.style.fontSize = "0px";
  elt.style.wordBreak = "break-all";

  const ε: number = .5;
  let δ = 20;

  let fontSize = 0;
  let prev = "inc";

  for(let i = 0; i < 20; i++) {
    const styleObj = getComputedStyle(elt);
    const height = parseFloat(styleObj.height);

    if(Math.round(height) == Math.round(fontSize)){
      if(δ < ε) break;
      δ = prev == "inc" ? δ : δ / 2;
      elt.style.fontSize = `${fontSize += δ}px`;
      prev = "inc";
    } else if(height > fontSize) {
      δ = prev == "dec" ? δ : δ / 2;
      elt.style.fontSize = `${fontSize -= δ}px`;
      prev = "dec";
    }
  }

  return fontSize / parseFloat(getComputedStyle(elt).width);        
}

const observer = new ResizeObserver((entries) => {
  for(const { target, contentBoxSize: [ { inlineSize: w, blockSize: h } ] } of entries){
    const elt = target as HTMLElement;
    const { textContent: text } = elt;

    if(!map.get(text)) map.set(text, findFitRatio(elt));
    let fontSize = map.get(text)! * w;

    elt.style.fontSize = `${fontSize}px`;

    if(Math.round(fontSize) == Math.round(h)) continue;
    else map.set(text, findFitRatio(elt));
  }
});

for(const elt of elements) observer.observe(elt);

export default {};