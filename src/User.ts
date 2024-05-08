import { faker } from '@faker-js/faker';

export class User {
  name: string;
  content: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.content = faker.lorem.lines({ min: 1, max: 10 });
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
