import { Pool } from "pg";
import { poolConfig } from "../keys";

const pool = new Pool(poolConfig);

export default pool;
