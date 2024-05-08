import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  content: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.content = faker.lorem.lines({ min: 1, max: 10 });
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
