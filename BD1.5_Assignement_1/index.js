
let express = require("express");
let cors = require("cors")
let app = express();

app.use(cors());

app.get("/",(req,res)=>{
  res.send("welcome to store");
})

app.get("/cart-total",(req , res )=>{
  console.log("testing")
  let newItemPrice= parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  if(cartTotal==0){
   res.send(newItemPrice.toString()); 
  }

  res.send((newItemPrice*cartTotal).toString());
})

calculateDiscunt = (cartTotal,isMember)=>{

  if(isMember){
  return( cartTotal - (cartTotal*0.1));
  }
  else {
    return cartTotal;
  }
}

app.get("/membership-discount",(req , res )=>{

  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember == "true"?true:false;
res.send(calculateDiscunt(cartTotal,isMember).toString());
  });

function calculateTax(carTotal){
  return (cartTotal*0.05);
}
app.get("/calculate-tax",(req ,res )=>{
  let cartTotal = parseFloat(req.query.cartTotal);

  let tax = calculateTax(cartTotal);
  res.send(tax.toString());
})

calculateDeliveryTime=(method,distance)=>{
if(method =="standard"){
  return distance/50;
}else {
  return distance/100;
}
  
}
app.get("/estimate-delivery",(req ,res )=>{
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
 res.send(calculateDeleiveryTime(shippingMethod,distance).toString());
  
})

calculateShippingCost =(weight,distance)=>{
 return weight * distance * 0.1 ;
}
app.get("/shipping-cost",(req ,res )=>{
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);

  res.send(calculateShippingCost(weight,distance).toString())
})

app.get("/loyalty-points",(req,res )=>{
  let purchaseAmount = parseFloat(req.query.purchaseAmount);

  res.send((purchaseAmount*2).toString());
})
app.listen(3000,()=>console.log("Server is running on port 3000"));