const express = require ('express')
const app = express()

//(app.use) Web Site Closed 

app.use (date = (req , res , next) => {
const time = new Date ()
const hour = time.getHours ()

console.log (hour);

const day = time.getDay ()

 

if (hour<9 || hour>17 || (day<1 || day>5) ) {

res.send ('Web Site Is Closed')
}

next()

})











//Requette Message
//res.send ('checkpoint express')

//Requette Fichier 
app.get ('/home' , (req, res) => {
res.sendFile( __dirname + '/Views/Home page.html' )
})

app.get ('/contact' , (req, res) => {
 res.sendFile( __dirname + '/Views/Contact us.html' )
})

app.get ('/services' , (req, res) => {
res.sendFile( __dirname + '/Views/Our services.html' )
})
















//Serveur 

app.listen ( 5000, err => {
if (err) console.log ('server error')

 console.log ('server is running at port 5000 ....');

})