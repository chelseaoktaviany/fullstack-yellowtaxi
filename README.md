## Step by Step before running the application locally

### Backend

- Clone the repository

- After cloning the repository, type `cd backend` folder, then run the following command
  ```
  npm install
  ```
- Then open the command prompt and run the following command
  ```
  psql -U postgres
  ```
- Type the password for username `postgres`
- Run the following command to create a new database
  ```
  CREATE DATABASE yellowtaxitrip_db;
  ```
- Run the following command to connect to the database
  ```
  c\ yellowtaxitrip_db
  ```
- Exit `psql` and type `backend/src` run the following command to import the dataset link into the database
  ```
  node importCSV.js
  ```
- If the CSV file is imported successfully, fill the following value with the `.env.sample` file and change file name to `.env`

  ```
  PSQL_LOCALHOST=localhost
  PSQL_HOST=127.0.0.1
  PSQL_USER=postgres
  PSQL_PASSWORD=yourpassword
  PSQL_DB=yellowtaxitrip_db
  PSQL_PORT=5432

  SOCRATA_APP_TOKEN=yoursocrataapptokenfromsocrataportaldev
  ```

- Run the `backend` locally with the following command
  ```
  npm run start:dev
  ```

### Frontend

- Type `cd ..` twice times and then go back to the `frontend` folder by typing `cd frontend`

- Run the following command to initialize the dependencies
  ```
  npm install
  ```
- Run the `frontend` locally with the following command
  ```
  npm run dev
  ```
- If everything is good, you can go back to the root directory, and run the following command to initialize the dependencies

  ```
  cd ..
  npm install
  ```

- Run the application locally with the following command
  ```
  npm run dev
  ```
- Open the web address `http://127.0.0.1:5173/` in the browser to see how the website is running locally
