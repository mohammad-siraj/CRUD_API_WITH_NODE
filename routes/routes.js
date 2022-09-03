const router=require("express").Router();

//GET commad for API
router.get("/get",(req,res)=>{ 
    res.json({login:"admin",password:"secret"});
});

//POST command for API
router.post("/post",(req,res)=>{
    const request=req.body;
    if(request.id){
        res.send(request.id);
    }else{
        res.status(400).json({Error:"something is wrong"});
    }
});

//Patch command for API
router.patch("/patch",(req,res)=>{
    const request=req.body;
    if(request.id=="admin"){
        res.send(request.id);
    }else{
        res.status(400).json({Error:"something is wrong"});
    }
});

//Delete command for API
router.delete("/delete",(req,res)=>{
    const request=req.body;
    if(request.id=="admin"){
        res.send(request.id);
    }else{
        res.status(400).json({Error:"something is wrong"});
    }
});

module.exports=router;