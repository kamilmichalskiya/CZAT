db = new Mongo().getDB("czat");

db.createCollection('messages', { capped: false });
