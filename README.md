# Simple REST API

A minimal **REST API** example built with **Node.js** and **Express** to demonstrate basic CRUD operations and routing.

## 🚀 Features

✔ Create, Read, Update, and Delete resources  
✔ JSON responses  
✔ Simple and extendable structure  
✔ Beginner-friendly

## 🧪 Endpoints

| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| GET    | `/api/items`    | Get all items                  |
| GET    | `/api/items/:id`| Get a single item by ID        |
| POST   | `/api/items`    | Create a new item              |
| PUT    | `/api/items/:id`| Update an existing item        |
| DELETE | `/api/items/:id`| Delete an item                 |

## 🛠️ Tech Stack
- Node.js  
- Express
## 📁 Project Structure

```
Simple-REST-API/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── /src
│ ├── app.js
│ ├── /routes
│ │ └── items.js
│ ├── /controllers
│ │ └── itemsController.js
│ ├── /models
│ │ └── itemModel.js
│ └── /data
│ └── items.json # (optional mock DB)
├── /tests
│ └── items.test.js
└── .env
```

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lazaro549/Simple-REST-API.git
   cd Simple-REST-API
2. Install dependencies:
   ```bash
   npm install

3. Start the server (development):
   ```bash
   npm run dev
4. Start the server (production):
   ```bash
   npm start
