const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    res.send('Hello My Name Is Ravano Akbar Widodo. Nice To Meet You All!')
})

app.get('/testimonials', (req, res) => {
    res.json([
        {
            author: "Ravano Akbar Widodo",
            content: "Keren banget jasanya! Top notch!",
            image: "https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 5
        },
        {
            author: "Novri",
            content: "Keren banget!",
            image: "https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 5
        },
        {
            author: "Denis",
            content: "Apasih bang!",
            image: "https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 1
        },
        {
            author: "Febry",
            content: "Oke deh!",
            image: "https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4
        }
    ])
})

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})