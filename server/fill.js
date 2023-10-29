const axios = require('axios');

const URL = 'http://localhost:4000';

const users = [
    { name: 'NobleCode', email: 'qq@qq.qq', password: 'qqqqqqqq' },
    { name: 'Labelka', email: 'ww@ww.ww', password: 'wwwwwwww' },
    { name: 'GlobalCode', email: 'ee@ee.ee', password: 'eeeeeeee' },
    { name: 'Krasnal', email: 'rr@rr.rr', password: 'rrrrrrrr' },
    { name: 'BestWro', email: 'tt@tt.tt', password: 'tttttttt' },
];


async function foo() {
    for (let i = 0; i < users.length; i++)
        await axios.post(URL + '/auth/register', users[i])


    for (let i = 0; i < users.length; i++) {
        const response = await axios.post(URL + '/auth/token', users[i])
        users[i].token = response.data.token;
    }

    for (let i = 0; i < users.length; i++) {
        const response = await axios.post(URL + '/users/read', { userId: null }, { headers: { 'Authorization': 'Bearer ' + users[i].token } })
        users[i].data = response.data;
    }

    const tasks = [
        { title: 'Task Q 1', description: 'Task Q description', category: 'Found', level: 1, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task W 2', description: 'Task W description', category: 'Found', level: 2, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task E 3', description: 'Task E description', category: 'Found', level: 3, min: 0, geoX: 0, geoY: 0 },
        { title: 'Task R 4', description: 'Task R description', category: 'Found', level: 4, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task T 5', description: 'Task T description', category: 'Found', level: 5, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task Q2 1', description: 'Task Q2 desc', category: 'Found', level: 1, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task W2 2', description: 'Task W2 desc', category: 'Found', level: 2, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task E2 3', description: 'Task E2 desc', category: 'Found', level: 3, min: 0, geoX: 0, geoY: 0 },
        { title: 'Task R2 4', description: 'Task R2 desc', category: 'Found', level: 4, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task T2 5', description: 'Task T2 desc', category: 'Found', level: 5, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task Q3 1', description: 'Task Q3 desc', category: 'Found', level: 1, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task W3 2', description: 'Task W3 desc', category: 'Found', level: 2, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task E3 3', description: 'Task E3 desc', category: 'Found', level: 3, min: 0, geoX: 0, geoY: 0 },
        { title: 'Task R3 4', description: 'Task R3 desc', category: 'Found', level: 4, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task T3 5', description: 'Task T3 desc', category: 'Found', level: 5, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task Q4 1', description: 'Task Q4 desc', category: 'Found', level: 1, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task W4 2', description: 'Task W4 desc', category: 'Found', level: 2, min: 2, geoX: 0, geoY: 0 },
        { title: 'Task E4 3', description: 'Task E4 desc', category: 'Found', level: 3, min: 0, geoX: 0, geoY: 0 },
        { title: 'Task R4 4', description: 'Task R4 desc', category: 'Found', level: 4, min: 1, geoX: 0, geoY: 0 },
        { title: 'Task T4 5', description: 'Task T4 desc', category: 'Found', level: 5, min: 2, geoX: 0, geoY: 0 },
    ];

    for (let i = 0; i < tasks.length; i++) {
        const request = await axios.post(URL + '/tasks/create', tasks[i], { headers: { 'Authorization': 'Bearer ' + users[i % 5].token } })
        tasks[i].taskId = request.data.taskId;
    }

    for (let i = 0; i < tasks.length / 2; i++) {
        await axios.post(URL + '/tickets/create', { taskId: tasks[i].taskId, comment: 'XDXDXDXD' }, { headers: { 'Authorization': 'Bearer ' + users[(i + 1) % 5].token } })
        await axios.post(URL + '/tickets/done', { taskId: tasks[i].taskId, userId: users[(i + 1) % 5].data.user.userId }, { headers: { 'Authorization': 'Bearer ' + users[i % 5].token } })
    }

    const opinions = [
        { title: 'Opinion E', description: 'Opinion Q description', level: 1, toUserId: users[4].data.user.userId },
        { title: 'Majsterkowanie', description: 'Błyskawiczne skręcanie stołu', level: 3, toUserId: users[0].data.user.userId },
        { title: 'Opinion T', description: 'Opinion E description', level: 3, toUserId: users[1].data.user.userId },
        { title: 'Opinion Q', description: 'Opinion R description', level: 1, toUserId: users[2].data.user.userId },
        { title: 'Opinion W', description: 'Opinion T description', level: 2, toUserId: users[3].data.user.userId },
        { title: 'Opinion E2', description: 'Opinion Q2 desc', level: 3, toUserId: users[4].data.user.userId },
        { title: 'Opieka nad zwierzęciem', description: 'Polecam!!', level: 2, toUserId: users[0].data.user.userId },
        { title: 'Opinion T2', description: 'Opinion E2 desc', level: 2, toUserId: users[1].data.user.userId },
        { title: 'Opinion Q2', description: 'Opinion R2 desc', level: 3, toUserId: users[2].data.user.userId },
        { title: 'Opinion W2', description: 'Opinion T2 desc', level: 1, toUserId: users[3].data.user.userId },
    ];

    for (let i = 0; i < opinions.length; i++) {
        await axios.post(URL + '/opinions/create', opinions[i], { headers: { 'Authorization': 'Bearer ' + users[i % 5].token } })
    }
}

foo();
