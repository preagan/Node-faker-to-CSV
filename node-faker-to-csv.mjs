import { faker } from '@faker-js/faker/locale/en';
import { writeFileSync } from 'node:fs';

function createNames(count) {
  let users = '';
  for (var i = 1; i <= count; i++) {
    users += `${faker.name.firstName()},${faker.name.lastName()},${faker.internet.email()},${faker.phone.number()},${faker.name.jobTitle()}\n`;
  }
  let path = '/your/fully/qualified/path.csv';
  console.log(users);
  try {
    writeFileSync(path, users);
    console.log('file exported');
  } catch (err) {
    console.log('err: ', err);
  }
}

createNames(5);
