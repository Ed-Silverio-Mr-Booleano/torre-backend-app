# torre-backend-app

# REST API using POSTGRESQL e EXPRESS



## Instalar a app

    npm install or yarn
    
## Configurar a base de dados
    
    executar o arquivo `server/infra/create.sql` num servidor PostgreSQL 
    ou
    copiar o código do arquivo `server/infra/create.sql` num servidor PostgreSQL
    
    Mudar os dados de acesso a base de dados no arquivo .env, tais como: USERNAME, HOST, PASSWORD e PORT
    
## Executar a app
    npm dev or yarn dev
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo.

### Endpoints

`GET /users/`

    'application/json' https://torre-backend-app.herokuapp.com/users
    
`GET /skills/`

    'application/json' https://torre-backend-app.herokuapp.com/skills
    
`GET /skills/id`

    'application/json' https://torre-backend-app.herokuapp.com/skills/id
    



