const exp = require('express')
const app = exp()
host="127.0.0.1"
PORT= process.env.PORT || 3000

app.get('/',(req,res)=>{
    // res.send("Hello World")
    res.json('https://covid19.who.int/page-data/table/page-data.json')
    res.end()
    console.log(data)
})
app.listen(PORT,host,()=>{
    console.log( `Server running at http://${host}:${PORT}`)
})