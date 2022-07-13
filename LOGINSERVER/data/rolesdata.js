const ROLE = {
    ADMIN: 'ADMIN',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'John', email: 'john@gmail.com', role: ROLE.ADMIN},
        { id: 2, name: 'MARY', email: 'mary@gmail.com', role: ROLE.BASIC},
        { id: 3, name: 'SOMIA', email: 'somia@gmail.com', role: ROLE.BASIC},
        { id: 4, name: 'RAJU', email: 'raju@gmail.com', role: ROLE.ADMIN},
        { id: 5, name: 'JACK', email: 'jack@gmail.com', role: ROLE.BASIC}
    ],
    projects: [
        { id: 1, name: 'John PROJECT', userid: 1 },
        { id: 2, name: 'MARY PROJECT', userid: 2},
        { id: 3, name: 'SOMIA PROJECT', userid: 3},
        { id: 4, name: 'RAJU PROJECT', userid: 4},
        { id: 5, name: 'JACK PROJECT', userid: 5}
    ]
}