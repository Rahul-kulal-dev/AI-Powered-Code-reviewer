const express=require("express");
const aiRoutes=require("./routes/ai.route")
const cors=require("cors");

const app=express();


app.use(cors());
app.use(express.json()) // lets your Express app read JSON data sent in the body of POST, PUT, or PATCH requests. Without it, req.body will be undefined.
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/ai",aiRoutes);

module.exports=app;