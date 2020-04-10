# Roman Numerals Service

Http Service to convert to/from Roman Numerals in [standard form](https://en.wikipedia.org/wiki/Roman_numerals#%22Standard%22_forms).

## routes

`/roman/:inputValue` convert roman to arabic
`/arabic/:inputValue` convert arabic to roman
`/all` get all saved/previous conversions
`/delete` delete all saved/previous conversions

## to run on localhost
build: `npm run build`

test: `npm test`

run: `npm start`

## to run in container
docker build: `docker build -t sovrn/roman-numeral-api:v0.0 -t sovrn/roman-numeral-api:latest .`

docker run: `docker run -d --name roman-numeral-api -p 8080:8000 sovrn/roman-numeral-api`

docker clean up: `docker stop roman-numeral-api && docker rm roman-numeral-api`

# to run full service w/ UI
To run API, UI, & DB use `docker-compose up -d --build -V`, 
and to stop services and clean up `docker-compose down`

once all containers are running, access UI on localhost:3000
