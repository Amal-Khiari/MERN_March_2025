import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Create User 
const createUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

// Create Company 
const createCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
};

//  Routes 
// return new user
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

// return new company
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

// return both user and company
app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(` Server is running on the PORT:${PORT}`);
});