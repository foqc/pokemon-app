## PROMPT
Write a very small PRD based on this: create a lightweight backend that replicates the PokeAPI's behavior. You can use Node.js and the Express.js framework. This server will serve mock data from a simple JavaScript array, simulating a database.

# Product Requirement Document (PRD)

## Title
Lightweight Backend to Simulate PokeAPI

---

## Objective
Create a lightweight backend that mimics the basic behavior of the PokeAPI, serving mock data from an in-memory JavaScript array (no database).

---

## Scope
- Implemented using **Node.js** and **Express.js**.
- Provide REST endpoints to retrieve Pokémon data.
- Use mock data (JavaScript array).

---

## Endpoints

### 1. `GET /pokemon`
- **Description:** Returns a paginated list of Pokémon.
- **Optional Query Parameters:**
  - `limit` (number of Pokémon per page).
  - `offset` (pagination starting point).
- **Response Example:**
```json
{
  "count": 150,
  "next": "url?page=2",
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "/pokemon/1" }
  ]
}


2. GET /pokemon/:idOrName

Description: Returns detailed information for a single Pokémon by ID or name.

Response Example:

{
  "id": 1,
  "name": "bulbasaur",
  "types": ["grass", "poison"],
  "height": 7,
  "weight": 69
}
