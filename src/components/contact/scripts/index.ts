//Initialize and add the map
export function initMap(): void {
  //The location of Namor Tech.
  const namor = { lat: 6.460676430794752, lng: 3.530324455470141 };

  //The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 14,
      center: namor,
    }
  );

  //The marker, positioned at namor
  const marker = new google.maps.Marker({
    position: namor,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;