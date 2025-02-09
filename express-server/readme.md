# Product Service API

This is a simple Product Service API built with Node.js, Express, and Prisma, using PostgreSQL as the database. The application is containerized using Docker.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a `.env` file in the root directory with the following content:

   env
   DATABASE_URL=postgresql://user:password@database:5432/mydb?schema=public
   PORT=3001
   

3. Start the application using Docker Compose:

   bash
   docker-compose up --build
   

4. The API will be available at [http://localhost:3001](http://localhost:3001).

## API Endpoints

- GET /products: List all products
- POST /products: Create a new product
- GET /products/{productId}: Get a product by ID
- PUT /products/{productId}: Update a product by ID
- DELETE /products/{productId}: Delete a product by ID
