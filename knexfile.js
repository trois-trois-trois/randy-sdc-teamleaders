const pass = require('./sensitive');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'ec2-18-223-44-22.us-east-2.compute.amazonaws.com',
            user: 'me',
            password: pass.password,
            database: 'espn',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: 'ec2-18-223-44-22.us-east-2.compute.amazonaws.com',
            user: 'me',
            password: pass.password,
            database: 'espn',
        },
        seeds: {
            directory: './database/seeds',
        }
    }
}