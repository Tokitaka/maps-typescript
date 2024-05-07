interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  async initMap(divId: string): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
      mapId: 'DEMO_MAP_ID',
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  constructor(divId: string) {
    this.initMap(divId);
  }

  async addMarker(mappable: Mappable): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    new AdvancedMarkerElement({
      title: mappable.name,
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
