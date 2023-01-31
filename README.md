This is Full-stack application with [NodeJSv19](https://nodejs.org/en/)  and [Next.js](https://nextjs.org/)

## Getting started
First, install the [PostgreSQL](https://www.postgresql.org/) on [Windows](https://winitpro.ru/index.php/2019/10/25/ustanovka-nastrojka-postgresql-v-windows/) or [Linux](https://www.postgresql.org/download/linux/), after that you need to set database pool in _```/packages/api-server/db/db.pool.ts```_. For creating the config you need to create _```keys/index.ts```_ in server root directory. 

Exmple of _index.ts_:
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
yarn # in root, server and client directories
# or
npm install
```

Run the development server:

```bash
# in root directory
yarn start
# or
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of web application.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:8080](http://localhost:8080).
