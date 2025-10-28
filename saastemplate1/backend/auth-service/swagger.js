// swagger.ts
import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Auth Service API",
    description: "Auth Service with OTP and user registration",
    version: "1.0.0",
  },
  host: "localhost:6001",
  basePath: "/api",
  schemes: ["http"],
  tags: [
    { name: "User Authentication", description: "Endpoints for user signup, verification, login" }
  ],
  definitions: {
    UserRegistration: {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "1234567890",
      country: "India"
    },
    VerifyUser: {
      email: "john@example.com",
      otp: "1234",
      password: "password123",
      name: "John Doe"
    }
  },
  responses: {
    Success: {
      description: "Operation successful",
      content: { "application/json": { message: "Success" } }
    },
    BadRequest: {
      description: "Validation error",
      content: { "application/json": { status: "error", message: "Validation failed" } }
    },
    Conflict: {
      description: "User already exists",
      content: { "application/json": { status: "error", message: "User already exists" } }
    }
  }
};

const outputFile = "./swagger-output.json";
const endPointsFiles = ["./routes/auth.router.ts"];

// Generate Swagger JSON
swaggerAutogen()(outputFile, endPointsFiles, doc).then(() => {
  console.log("Swagger file generated at", outputFile);
});
