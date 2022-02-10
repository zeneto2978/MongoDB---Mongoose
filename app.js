const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click: {type:Number, default: 0}
})

const Link = mongoose.model('Link', linkSchema)


// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({ name: "José", age: 23});

// person.save().then(doc => { console.log(doc)

// }).catch(err => {console.log(err)})



mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let link = new Link({
    title: "GitHub",
    description: "Link para o GitHub",
    url: "https://github.com/zeneto2978",
    click: 0,
})

link.save().then(doc => {
    console.log(doc)
}).catch(err => { console.log(err) })

let db = mongoose.connection;

db.on("error", () => { console.log("houve um error") });
db.once("open", () => {console.log("Banco carregado") })





app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))
