const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restaurantes', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));

// db.once('open', () => console.log('Houston, nos temos uma conexao!'));

const restaurantesSchema = new mongoose.Schema({
    nome: String,
});

const restaurant = mongoose.model('Restaurantes', restaurantesSchema);
// console.log(restaurantes)

async function main() {
const restaurante = new restaurant({nome: 'Sementina'});
const restauranteDoBanco = await restaurante.save().catch((erro) => console.log(erro));
console.log('Restaurante do banco:', restauranteDoBanco);
const restaurantes = await restaurant.find();
console.log(restaurantes)
console.log('Log do fim do arquivo', restaurante)
}

main();
