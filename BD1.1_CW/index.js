let express = require("express");
let app = express();

app.get("/name",(req,res)=>{
  let myName = (req.query.name).toUpperCase();
 
  res.send(myName);
})

app.get("/fullname",(req,res)=>
  {
    let firstName = req.query.firstname;
    let lastName = req.query.lastname;
    res.send(firstName+" "+lastName)
  })

let PORT = 3000;
app.listen(PORT,()=>(console.log("Server is running on port" , PORT)));