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

module.exports=router;