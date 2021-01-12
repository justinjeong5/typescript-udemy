export class FacadeMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.querySelector('#googleMap'),{
      zoom: 1,
      center: { lat: 0, lng: 0}
    });
  }
}