require('dotenv').config()

const env = process.env
export const port = env.PORT || 3030
export const dbURL = env.DB_URL