# Stana API REST
API Rest using fastify for point of sale system.

## Project setup
- `npm i`
- read `config/default.json.example` file & follow the instructions.
- run migrations `npx sequelize-cli db:migrate`
- run seeders `npx sequelize-cli db:seed:all `

#### <strong>on dev tricks</strong>
install `sequelize-cli` as global package:
- `npm -g sequelize-cli` <br>

set an alias, for example:
- `alias seq-cli='sequelize-cli'`


## API docs
This project use swagger. You can found the api documentation on `/docs` route. 
