# Dishy Backend 🍕✨


## Introduction

Dishy is a food rating and searching app. It differs from other culinary apps in that its focus isn't on the reputation of  *restaurants*, but that of *specific dishes* at specific restaurants.

This repo contains the API that manages communications between the frontend and backend services such as the Dishy database and 3rd parties. The frontend can be found [here](https://github.com/DevArrowsmith/dishy-frontend).


*This project was created by [Hugh Kristiansen](https://github.com/hughsylinden) and [David Arrowsmith](https://github.com/DevArrowsmith?tab=following) as their final project of the Manchester Codes [Software Enginnering FastTrack](https://www.manchestercodes.com/software-engineer-fasttrack/).*

---

## Concept

Suppose you craved pizza. Plenty of restaurants serve pizza, and ratings for those restaurants are available via various apps such as google, yelp and tripadvisor. But the best restaurant doesn't necessarily serve the best pizza. It may serve pretty average pizza

Dishy doesn't aggregate restaurant ratings. It aggregates **dish ratings**. It won't tell you which restaurant is the best in the city, but it **will** tell you where to get the best pizza in the city; or the best milkshake, the best ramen, the best sundae, the best dahl...

Dishy provides two core services.
1. **Rate a Dish:** Users can submit ratings for specific dishes at specific restaurants. Ratings are out of 10.
2. **Find a Dish:** Users can search for a specific dish in their current location or in a location they input. Dishes are shown as a list ordered either by rating (best rated first) or by proximity (closest first).

---

## Running the App

To run the app locally:
- Clone this repo
- Navigate to root in a bach terminal
- Run `npm run start:dev`
- You'll also need to host the frontend. The frontend and instructions on its use can be found [here](https://github.com/DevArrowsmith/dishy-frontend/tree/da-211002).
- A database solution isn't currently available to visitors to this repo. The creators are using docker containers to host test databases locally.

In time this app will be hosted online.

---

## Technologies

- axios was used as a HTTP client
- express was used to handle HTTP requests
- mysql and sequelize were used to manage the database
- cors was used to enable communications between the frontend and Yelp!.
- Nodemon was used to facilitate development.
- eslint & prettier were used for linting.