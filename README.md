
![Kapture 2022-10-14 at 08 55 47](https://user-images.githubusercontent.com/25853859/195866214-fcbfd3b1-1482-45d1-8822-8003fd1bbf9d.gif)

# Marvel App
Marvel app is a system to register all the mutants criatures so that goverments can have a list of then and call them in bad times.

## Run the app
1. Clone this repo
`git clone git@github.com:jorgesaavedra97/marvel-app.git`

2. Start your MySQL Service and run this file in your MySQL Server, or optionaly copy and paste its content into any MySQL manager app
    1.  `marvel-app/server/data/marvel_universe.sql`

3. Create the `.env` file in the marvel-app/server folder with the correct credential values
```
HOST=localhost
DATABASE=marvel_universe
DB_USER=marvel_universe_user
PASSWORD=vcUCIS8377@r
```

4. Intall dependencies and run the *backend* server
`cd server && npm i && npm run dev`


5. Test the REST Services using the `marvel-app/HEROES.postman_collection.json` colection


6. Finally run the *frontend* server
`cd .. && npm i && npm start`

