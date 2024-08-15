const app = require('./src/app');
const database = require('./src/database');

const PORT = process.env.PORT;

database._connect();

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
