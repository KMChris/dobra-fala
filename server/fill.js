const axios = require('axios');

const URL = 'http://localhost:3000';

const users = [
    { name: 'John123', email: 'john@example.com', password: 'john123' },
    { name: 'Jane123', email: 'jane@example.com', password: 'jane123' }
];

async function foo() {
    for (let i = 0; i < users.length; i++)
        await axios.post(URL + '/auth/register', users[i])

    for (let i = 0; i < users.length; i++) {
        const response = await axios.post(URL + '/auth/token', users[i])
        users[i].token = response.data.token;
    }

    
}

foo();

