
const express = require("express");
const HamroSewaRouter = express.Router();

const HamroSewaCltr = require("./controller");

// Create a new service
HamroSewaRouter.post("/create", HamroSewaCltr.create);
HamroSewaRouter.get("/", HamroSewaCltr.getAllServices);

// Get all services
HamroSewaRouter.get("/list", HamroSewaCltr.list);

// Get a single service by ID
HamroSewaRouter.get("/detail/:id", HamroSewaCltr.detail);

// Update a service
HamroSewaRouter.put("/update/:id", HamroSewaCltr.update);

// Delete a service
HamroSewaRouter.delete("/delete/:id", HamroSewaCltr.delete);

// Toggle service active status
HamroSewaRouter.patch("/status/:id", HamroSewaCltr.toggleStatus);

module.exports = HamroSewaRouter;
