import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyParser from 'body-parser';

//Crear servidor

const app = express();

//Configurar Json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({ cache: true, rateLimit: true, jwksRequestsPerMinute: 5, jwksUri: 'https://flyescudero.auth0.com/.well-known/jwks.json' }),
    audience: 'http://products',
    issuer: 'https://flyescudero.auth0.com/',
    algorithms: ['RS256']
});

app.get('/products', (req, res) => {
    console.log(req);
});


app.listen(5000, () => {
    console.log('Servidor Funcionando')
})