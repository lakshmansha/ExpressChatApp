# Steps for Run API inside Container with DB as Container

## Step 1:

Create an Network for Docker with below Command:

```powershell

docker network create dockernet

```

## Step 2:

Created Run the Mongo Container with mapping the created network using below Command:

```powershell

docker pull mongo
docker run --network dockernet --network-alias mongo --name mongodb -p 27017:27017 -d mongo

```

#### Refered Links

- [Multi container apps](https://docs.docker.com/get-started/07_multi_container/)
