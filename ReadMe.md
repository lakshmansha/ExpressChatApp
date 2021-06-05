# Express Chat App

Application developed with Stack of Node.JS, Express.JS & MongoDB.

## Setup Docker

- Step 1: Create the file .dockerignore and add below code

```dockerignore
**/.dockerignore
**/.env
**/.git
**/.gitignore
**/.vscode
**/Dockerfile*
**/node_modules
**/npm-debug.log
README.md
```

- Step 2: Create the file Dockerfile.Dev and add below code

```dockerfile
#  Create a new image from the base nodejs 12.7 image.
FROM node:12.7-alpine
# Create the target directory in the image
RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY ./package.json /usr/src/app
# Install required dependencies
RUN  npm install;

# Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore does.
COPY ./ /usr/src/app
# Open port 3000. This is the port that our development server uses
EXPOSE 3000
# Start the application. This is the same as running ng serve.
CMD ["npm", "run", "start:dev"]
```

- Step 3: Need to Setup MongoDB and Network for Multi Container.

  Check this File [**Docker with DB.md**](./Docker_with_DB.md)

- Step 4: Create Docker Image & Run Container

## Step 3:

Created Run the API Container with mapping the created network using below Command:

```powershell
docker build -t expresschatapp:dev -f Dockerfile.Dev .
docker run --network dockernet --env-file docker.env -it --rm -p 3000:3000 -v ${PWD}/src:/usr/app/src --name expresschatapp expresschatapp:dev

```
