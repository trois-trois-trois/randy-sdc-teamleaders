module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'ec2-54-67-76-231.us-west-1.compute.amazonaws.com',
            user: 'me',
            password: 'password',
            database: 'espn',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: 'ec2-54-67-76-231.us-west-1.compute.amazonaws.com',
            user: 'me',
            password: 'password',
            database: 'espn',
        },
        seeds: {
            directory: './database/seeds',
        }
    }
}