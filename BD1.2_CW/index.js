
let express=require("express");

let app = express();

app.get("/total-distance",(req,res)=>{
  
let distance1 = req.query.distance1
  let distance2=req.query.distance2
  console.log(distance1,distance2)  
  let totalDistance = parseFloat(distance1)+parseFloat(distance2);
  
  res.send(totalDistance.toString());
})
let PORT = 3000;
app.listen(PORT, () => console.log("Server is running on port", PORT));