This is Full-stack application with [NodeJS v19](https://nodejs.org/en/)  and [Next.js v13](https://nextjs.org/)

## Getting started
First, install the [PostgreSQL](https://www.postgresql.org/) on [Windows](https://winitpro.ru/index.php/2019/10/25/ustanovka-nastrojka-postgresql-v-windows/) or [Linux](https://www.postgresql.org/download/linux/), after that you need to set database pool in _```/packages/api-server/db/db.pool.ts```_. For creating the config you need to create _```keys/index.ts```_ in server root directory. 

Exmple of _```index.ts```_:
```bash
export const poolConfig = {
  user: "postgre",
  password: "12345678",
  host: "localhost",
  port: 5432,
  database: "database_name",
};

```

How to install dependencies:
```bash
# in root, server and client directories
yarn
# or
npm install
```

## Usage

Run the development server:

```bash
# in root directory
yarn start
# or
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of web application.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:8080](http://localhost:8080).

To change an element, click on it 2 times in the table on page __"Таблица"__. To creating new element go to page __"Создать элемент"__ and create him, also to display the report go to page __"Отчёт"__.
