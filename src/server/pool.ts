import { Pool } from 'pg'

export const db = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 10867,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.SSL
    },
    max: 1,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 15000,
})