# Server App Project Structure w/ Fastify 
This's a very simple initial scaffold to build Fastify APIs following the microservice architectures principles (at least I thing so 'cause I'm learning). You can directly starts to add migrations, models & seeders using `sequelize-cli`, as well as create your own services, controllers & schemas. The project is thought-out to provide a useful starting point to build APIs (through Fastify framework) with a integrated ORM (Sequelize), a database connection, a auto-generate docs (Swagger), among others.

## Project Structure

- The `app/` folder contains the core code of the application without consider the controller logic (located on the  `routes/` folder). Inside this you can found the following directories:
    - `commands/`. Contains your custom scripts that will called from the package.json.
    - `config/`. Contains config values of global access. This files typically uses the environment variables. 
    - `database/`. Contains the migrations & seeders.
    - `lib/`. Directory to place reusable code w/ certain business logic.
    - `models`. Contains the ORM sequelize models.
    - `utils`. Some reusable function like passwords encryption.  
    <br>

- The `config/` directory contains all enviroment config files including the sequelize config file.
- The `public/` folder houses your pubic files such as images or other free access assets.
- The `routes/` directory contains your appliction modules separated by folders for each service.
- The `tests/` directory contains your automated tests.

## Project Setup
- `npm i`
- read `config/default.json.example` file & follow the instructions.
- `npm run app:key` secret key to sign JWT. 

### (optional) run demo seeders
- run migrations `npx sequelize-cli db:migrate`
- run seeders `npx sequelize-cli db:seed:all `

## API docs
Swagger has already been integrated to this project. You can found the api documentation on `/docs` route. 

## My dev tricks
- Install `sequelize-cli` as global package:
    - `npm i -g sequelize-cli` <br>

    create an alias on your shell, for example:
    - `alias seq-cli='sequelize-cli'`

## Roadmap
Here's a rough roadmap of things to do:
- [x] DB connection helper
- [x] bcrypt.js helper 
- [x] Add a example custom command 
- [x] Create some example models, migrations, seeders
- [x] Create an app module (complete CRUD). 
- [x] Add JWT authentication 
  - [ ] signin and login

## License
The MIT License (MIT)