interface Mappable {
  name: string;
  content: string;
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

    const marker = new AdvancedMarkerElement({
      title: mappable.name,
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
      <h1>${mappable.name}</h1> 
      <div>${mappable.content}</div>
      `,
      ariaLabel: mappable.name,
    });

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });

    infoWindow.addListener('closeclick', () => {
      infoWindow.close();
    });
  }
}
