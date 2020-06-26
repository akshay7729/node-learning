const path = require('path');
const express = require("express");

const app = express();

// Define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates');

// Setup handlebars engine and view location
app.set('view engine','hbs');
app.set('views',viewsPath);

// Setup static dir to serve
app.use(express.static(publicDirPath));

// serving dynamic content with hbs
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Akshay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: "About Page",
        name: "Akshay"
    })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Heat Up",
    location: "Gurgoan"
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
