let express = require("express");
let app = express();

app.get("/check-num",(req,res)=>{

  let number =  parseFloat(req.query.number);
  let result = number>=0? "positive":"negative";
  res.send(result);
})

app.listen(3000,()=>console.log("Server is running on port 3000"))