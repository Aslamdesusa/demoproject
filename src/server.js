import Hapi from 'hapi';


const db = require('../database').db;

import routes from './routes'

const server = new Hapi.Server();

server.connection({
    port: 3000
});

server.route({

    method: 'GET',
    path: '/hello',
    handler: ( request, reply ) => {
        reply( 'Hello World!' );
    }

});

server.route(routes)


server.start(err => {

    if (err) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

});