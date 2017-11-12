---
title: How To GraphQL
date: "2017-11-12T22:12:03.284Z"
path: "/How-To-GraphQL/"
---

# No more Over- and Underfetching

One of the most common problems with REST is that of over- and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

> “Think in graphs, not endpoints.” Lessons From 4 Years of GraphQL by Lee Byron, GraphQL Co-Inventor.

## Overfetching: Downloading superfluous data

Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the `/users` endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.

## Underfetching and the n+1 problem

Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.

As an example, consider the same app would also need to display the last three followers per user. The API provides the additional endpoint `/users/<user-id>/followers`. In order to be able to display the required information, the app will have to make one request to the `/users` endpoint and then hit the `/users/<user-id>/followers` endpoint for each user.

# Benefits of a Schema & Type System

GraphQL uses a strong type system to define the capabilities of an API. All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server to define how a client can access the data.

Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network.

Frontend teams can easily test their applications by mocking the required data structures. Once the server is ready, the flip can be switched for the client apps to load the data from the actual API.