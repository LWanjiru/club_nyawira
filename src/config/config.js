
import dotenv from 'dotenv'
dotenv.config()
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports ={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "club_nyawira_dev",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "club_nyawira_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "club_nyawira_prod",
    "host": DB_HOST,
    "dialect": "postgres"
  }

}
