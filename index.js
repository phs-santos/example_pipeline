const app = require('./src/app');
const database = require('./src/database');
const PORT = 9001;

// Conectar ao banco de dados
database._connect();

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});

