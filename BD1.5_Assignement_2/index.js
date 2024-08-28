let express = require("express");
let cors = require("cors");
let app = express();
let PORT = 3000;

app.use(cors());

app.get("/",(req,res)=>{
  res.send("Welcome to Stock Market");
})

app.get("/calculate-returns",(req,res)=>{
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let returns = (marketPrice - boughtAt) * quantity;

  res.send(returns.toString());
  
});

app.get("/total-returns",(req,res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalStocks = stock1 + stock2 + stock3 + stock4;
  res.send(totalStocks.toString());
  
})

app.get("/calculate-return-percentage",(req,res)=>{

  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let percentageOfReturns = (returns / boughtAt) * 100;
  res.send(percentageOfReturns.toString());
});


app.get("/total-return-percentage",(req,res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalStocksReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalStocksReturns.toString());

});

app.get("/status",(req,res)=>{
  let returnPercentage = parseFloat(req.query.returnPercentage);

  let status;
  if(returnPercentage > 0){
    status = "Profit";
  }else {
    status = "Loss";
  }
  res.send(status);
});
app.get
app.listen(PORT,()=>{
  console.log('Server is running on port',PORT);
});

