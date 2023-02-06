const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// req is short for request
// res is short for response

const createUser =() => {
  const newFake = {
    password : faker.internet.password(),
    email : faker.internet.email(),
    phoneNumber : faker.phone.number(),
    lastName : faker.name.lastName(),
    firstName : faker.name.firstName(),
    _id : faker.database.mongodbObjectId()
  }
  return newFake
}

  const newFakeUser = createUser();
  console.log(newFakeUser);

const createCompany =() => {
    const newFakeCompany ={
      _id : faker.database.mongodbObjectId(),
      name : faker.company.name(),
      address : {street : faker.address.streetAddress(),
                  city : faker.address.city(),
                  state : faker.address.state(),  
                  zipCode : faker.address.zipCode(),
                  country : faker.address.country()
                }
    }
    return newFakeCompany
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
  res.json({ newFakeUser });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ newFakeCompany });
});

app.get("/api/user/company", (req, res) => {
  res.json({ newFakeUser, newFakeCompany });
});
