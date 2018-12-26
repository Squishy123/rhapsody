const glob = require('glob');

const fastify = require('fastify')({logger: true});

//enable env vars
require('dotenv').config();

//load plugins 
