const app=require("express")();
const bodyParser=require("body-parser");
const routes=require("../routes/routes")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.listen(8000,()=>console.log("Connected to the server"))

app.get("/",(req,res)=>{
    res.json({login:"admin",password:"secret"});
});

app.use("/routes",routes)