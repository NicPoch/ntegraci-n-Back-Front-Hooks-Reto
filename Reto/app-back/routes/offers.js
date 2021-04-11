var express=require("express");
var router=express.Router();
const Mongolib=require('../db/Mongolib');

//GET
router.get('/',(req,res,next)=>{
    Mongolib.getdatabase(db=>{
        Mongolib.findDocuments(db,docs=>{
            res.send(docs);
        });
    });
});
//POST
router.post('/',(req,res,next)=>{
    Mongolib.getdatabase(db=>{
        Mongolib.insertDocument(db,req.body);
        res.sendStatus(200);
    });
});
module.exports=router;