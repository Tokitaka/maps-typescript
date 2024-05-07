import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        mapId: 'DEMO_MAP_ID',
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 1,
      }
    );
  }

  addMarkerOnUser(user: User): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  addMarkerOnCompany(company: Company): void {}
}
