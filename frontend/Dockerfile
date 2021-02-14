FROM selimdockerhub/simple-node-11.5-base:latest as build

# Create app directory
WORKDIR /app

COPY . /app/

RUN npm install --silent

RUN npm install react-scripts@3.0.1 -g --silent

## Run 
RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
