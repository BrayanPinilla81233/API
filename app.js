

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const postRoute = require ('./routes/post');
app.use ('/servicios', postRoute);

app.get('/', (req, res) => {
    res.send('Prueba 1 56u7776');
} );

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://monkey:monkey123@atlascluster.kx0qcpx.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        app.listen(1000);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();



