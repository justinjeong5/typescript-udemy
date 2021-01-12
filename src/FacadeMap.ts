export class FacadeMap {
  private googleMap: google.maps.Map;

  constructor(htmlDivId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${htmlDivId}`),{
      zoom: 1,
      center: { lat: 0, lng: 0}
    });
  }
}