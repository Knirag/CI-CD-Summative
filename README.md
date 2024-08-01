# Blog Application Backend

## Project Description

This project is a backend application for managing blog creation. It is built using Node.js, Express.js, MongoDB, and Mongoose. The application allows users to create an account, login, view a list of blogs, add new blog posts, update their existing blog posts, and delete blog posts. Authentication is implemented using tokens, which need to be included in the request headers for protected routes.

## Tools Used

 **Node.js**: JavaScript runtime for building the application.
- **Express.js**: Framework for creating the server and handling HTTP requests.
- **MongoDB**: NoSQL database for storing blog posts and user information.
- **Mongoose**: ODM library for interacting with MongoDB.
- **Docker**: Containerization platform to package the application.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.
- **GitHub Actions**: CI/CD platform for automating build, test, and deployment processes.
- **Nginx**: Web server used for serving the application.
- **Snyk**: Security tool for scanning and fixing vulnerabilities in dependencies.
- **DigitalOcean**: Cloud provider for deploying the application.

## CI/CD Pipeline

The project utilizes GitHub Actions to create a CI/CD pipeline. The pipeline consists of the following steps:

1. **Linting**: The code is first linted to ensure adherence to coding standards and best practices.
2. **Testing**: The tests are executed to verify the functionality and correctness of the code.
3. **Building**: The code is then built to generate the necessary artifacts.
4. **Docker Image Creation**: The built artifacts are used to create a Docker image.
5. **Docker Image Push**: The Docker image is pushed to Docker Hub for easy deployment and distribution.
6. **Deployment**: Automatically deploys the Docker image to DigitalOcean.

## Project Setup

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2. **Navigate into the project directory**:
    ```bash
    cd <project-directory>
   
## Project Setup (continued)

3. **Create a new `.env` file**: Copy the contents of `.env.example` into a new `.env` file and adjust the configurations as needed.
4. **Install the dependencies**:
    ```bash
    npm install
    ```

### Database Setup

1. **Install MongoDB**: Follow the official MongoDB installation guide to set up MongoDB on your local machine or use a cloud service.
2. **Create a new database**: Ensure you have a database created in MongoDB and update the `.env` file with the new database configurations.

### Project Setup with Docker

1. **Clone the repository** (if not already done):
    ```bash
    git clone https://github.com/Knirag/CI-CD-Summative.git
    ```
2. **Navigate into the project directory**:
    ```bash
    cd CI-CD-Summative folder(Wherever it is located)
    ```
3. **Build and start the application using Docker Compose**:
    ```bash
    docker-compose up --build
    ```
   The server will be running at `http://localhost:4000`.

## Endpoints

- **POST http://64.227.147.241:4000/auth/register**
    - Description: Create a new user account.
    - Request Body:
        ```json
        {
             "username":"Name",
            "email": "user@example.com",
            "password": "yourpassword"
        }
        ```
    - Response: Returns a token for authentication.

- **POST http://64.227.147.241:4000/auth/login**
    - Description: Login to the application.
    - Request Body:
        ```json
        {
            "username":"Name",
            "email": "user@example.com",
            "password": "yourpassword"
        }
        ```
    - Response: Returns a token for authentication.

- **GET /api/blogs**
    - Description: Returns a list of all blogs. No authentication required.

- **POST /api/blogs**
    - Description: Creates a new blog post.
    - Request Body:
        ```json
        {
            "title": "Blog Title",
            "content": "Blog content here."
        }
        ```
    - Headers: Include the token in the request headers for authentication.

- **PATCH /api/blogs/:id**
    - Description: Updates the blog post with the given ID.
    - Request Body:
        ```json
        {
            "title": "Updated Title",
            "content": "Updated content here."
        }
        ```
    - Headers: Include the token in the request headers for authentication.

- **DELETE /api/blogs/:id**
    - Description: Deletes the blog post with the given ID.
    - Headers: Include the token in the request headers for authentication.

## Project Structure

- **src/app.js**: Entry point of the application.
- **src/controllers**: Contains controller functions for handling requests.
- **src/models**: Contains the Mongoose schemas and models.
- **src/routes**: Defines the API routes.
- **src/services**: Contains the service functions that interact with the database.
- **src/middleware**: Contains middleware functions such as authentication checks.

## Running the Project

1. **Start the server**:
    ```bash
    npm run dev
    ```
   The server will be running at `http://localhost:4000`.

## Docker Configuration

- **Dockerfile**: Defines the environment for the Node.js application.
- **docker-compose.yml**: Configures and runs multi-container Docker applications.

## DEPLOYMENT
## DIGITALOCEAN

Deploy the application to DigitalOcean using the Docker image created during the CI/CD pipeline.

### Deployment Steps

1. **Login to DigitalOcean:**
   - Use your credentials to log in to your DigitalOcean account.

2. **Create a Droplet:**
   - Set up a new Droplet with the desired specifications. For this project, a Docker-compatible Ubuntu Droplet is recommended.

3. **Access the Droplet:**
   - SSH into your Droplet using the command:
     ```bash
     ssh root@64.227.147.241
     ```

4. **Install Docker and Docker Compose:**
   - Ensure Docker and Docker Compose are installed on your Droplet. Follow the [official Docker documentation](https://docs.docker.com/engine/install/ubuntu/) for installation instructions.

5. **Clone the Repository:**
   - Clone the repository containing your Docker Compose file and application code:
     ```bash
     git clone <repository-url>
     cd <repository-directory>
     ```

6. **Deploy the Application:**
   - Use Docker Compose to build and start the application:
     ```bash
     docker-compose up -d
     ```

7. **Verify the Deployment:**
   - Check the status of your containers to ensure they are running:
     ```bash
     docker-compose ps
     ```

8. **Access the Application:**
   - Open your web browser and navigate to `http://64.227.147.241:3000` to access the application.


### Monitoring and Access

- **Grafana:** Access Grafana at `http://64.227.147.241:3000` for monitoring and dashboards.
- **Prometheus:** Access Prometheus at `http://64.227.147.241:9090` for metrics and querying.

## SECURITY PRACTICES
**Snyk**: Regularly scan for vulnerabilities in dependencies using Snyk.

## Command:

snyk test
**Secure Coding**: Follow best practices to prevent common vulnerabilities.

**Secret Management**: Securely manage sensitive information with tools like HashiCorp Vault.

**Access Control**: Implement robust access control for both the application and infrastructure.



## Resources

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Nginx](https://www.nginx.com/)
- [Snyk]
- [DigitalOcean]
