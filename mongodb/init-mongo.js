db.createUser({
    user: 'root', pwd: 'root', roles: [{
        role: 'readWrite', db: 'czat',
    },],
});

db = new Mongo().getDB("czat");

db.createCollection('messages', {capped: false});
