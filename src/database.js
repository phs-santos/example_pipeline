const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = process.env.MONGO_DB_SERV;
const database = process.env.MONGO_DB_NAME;
const user = process.env.MONGO_DB_USER;
const pass = process.env.MONGO_DB_PASS;

class Database {
    constructor() {
        this._connect();
    }

    async _connect() {
        if (process.env.NODE_ENV === 'test') {
            this.mongoServer = await MongoMemoryServer.create();
            const uri = this.mongoServer.getUri();
            mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => console.log('Banco de dados em memória conectado com sucesso'))
                .catch(err => console.error('Erro ao conectar com o banco de dados em memória', err));
        } else {
            mongoose.connect(`mongodb+srv://${user}:${pass}@${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => console.log(`Banco de dados ${database} conectado com sucesso`))
                .catch(err => console.error(`Erro ao conectar com o banco de dados: ${database}`, err));
        }
    }

    async disconnect() {
        if (process.env.NODE_ENV === 'test') {
            await mongoose.disconnect();
            await this.mongoServer.stop();
        } else {
            await mongoose.disconnect();
        }
    }
}

module.exports = new Database();