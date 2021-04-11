const MongoClient=require("mongodb").MongoClient;
const assert=require("assert");

const url=process.env.mongourl;
const dbName="job";
const client=new MongoClient(url,{useUnifiedTopology:true});

const getdatabase=(callback)=>{
    client.connect((err)=>{
        assert.equal(null,err);
        console.log("Succesful Database Connection");
        const db=client.db(dbName);
        callback(db,client);
    });
};

const findDocuments=(db,callback)=>{
    const collection=db.collection("offers");
    collection.find({}).toArray((err,docs)=>{
        assert.equal(null,err);
        callback(docs);
    });
};

exports.getdatabase=getdatabase;
exports.findDocuments=findDocuments;