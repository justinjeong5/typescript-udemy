interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class FacadeMap {
  private googleMap: google.maps.Map;

  constructor(htmlDivId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${htmlDivId}`),{
      zoom: 1,
      center: { lat: 0, lng: 0}
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { 
        lat: mappable.location.lat, 
        lng: mappable.location.lng 
      },
    })
  }
}