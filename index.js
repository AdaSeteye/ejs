import express from "express"
const app = express()
var wish
const port = 3000
const d = new Date();
let day = d.getDay();
app.get("/", (req, res) => {
    if(day === 0 || day === 1){
        wish = "Hey! It's a weekend, it's time to have fun!"
    }
    else{
        wish = "Hey! It's a weekday, it's time to work hard!"
    }
    res.render("index.ejs", {hope: wish})

})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})