# SenseHAT Art Editor

## About
[![SenseHAT Art Editor Demo][product-screenshot]](https://sensehatpixelarteditor.netlify.app/)
When completing a PIOT class in university, we had to use a Raspberry Pi with a SenseHAT. We were given an assessment where we had to create pixel art.
While completing it I thought it was extremely tedious. I thought that one day I'll create an app to easily create art and obtain the code. This project is the result of that.

https://sensehatpixelarteditor.netlify.app/

## Getting Started
### Prerequisites
I assume you have installed Docker and it is running.

See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.
### Docker Compose
Steps to Docker Compose:

1. Clone this repo
```
git clone https://github.com/noeltesaluna/sense-hat-art-editor.git
```
2. Run this project using docker compose, in your terminal enter:
```
docker compose up
```
3. You can access the webapp at `http://localhost:8080/`
4. Once completed you can stop and remove the container using:
```
docker compose down
```

[product-screenshot]: images/demo.png