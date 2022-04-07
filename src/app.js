const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')
const { count } = require('console')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'alat',
        name: 'alta'
    })
})

app.get('/weather', (req, res) => {
    const address=req.query.address;
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    weather(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(data)
        res.render('result',{
            forecast: data.location,
            address: data.longitude
        })
        // console.log(data)
       
    })

    
 
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'tuan anh',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})