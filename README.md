# Node-faker-to-CSV
Quickly create fake data .csv files

### Intro

This is a gist for creating a csv file of sample data using node, faker and writeFileSync.

The actual code is both below and in attached the repo file. The example function call is for 5 rows of data. I changed this to 49,000 to produce an import file to stress test an Airtable base. (It did really well.)

The faker package offers a wide variety of possible fake data. This code is an example of name data, but many other types of data are available. Details can be found here:
https://www.npmjs.com/package/@faker-js/faker

I found the included console.log lines useful for testing.

### Use instructions

Check that node is operating on your machine

```Shell
$ node -v    // v17.4.0
```

Installation, if necesary, varies by platform

https://nodejs.org/en/download/

In a new folder/directory initialize a node app

```Shell
$ npm init -y
```

Install faker

```Shell
$ npm install --save-dev @faker-js/faker
```

Create (or download) an .mjs file with this code...

```javascript
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
```

Navigate to the new directory using your terminal program and run...

```Shell
$ node faker.mjs
```
