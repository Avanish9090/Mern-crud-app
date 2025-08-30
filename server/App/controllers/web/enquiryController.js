const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req,res) => {
    let {name,email,number,message} = req.body;
    let enquiry = new enquiryModel({
        name:name, // you can also pass only key because the value of key and value is same
        email:email,
        number:number,
        message:message
    })
    enquiry.save().then(()=>{
        res.send(
            {
                status:1,
                msg:"data saved"
            }
        )
    }).catch((err) => {
        res.send(err);
    })
}

let enquiryList = async (req,res) => {
    let enquiry = await enquiryModel.find();
    res.send({
        status:1,
        list:enquiry
    })
}

let deleteData = async (req,res) => {
    let enID = req.params.id;
    let delRes = await enquiryModel.deleteOne({_id:enID});
    res.send({
        status:1,
        msg:"deleted successfully",
    }) 
}

let enquiryFind = async (req,res) => {
    let enId = req.params.id;
    let resultRes =await enquiryModel.findOne({_id:enId});
    res.send(
        {
            status:1,
            msg:"data found",
            resultRes
        }
    )
}

let enquiryUpdate = async(req,res) => {
    let enquiryId = req.params.id;
    let {name,email,number,message} = req.body
     
    let updateObj = {
        name:name, 
        email:email,
        number:number,
        message:message
    }
     let updateRes = await enquiryModel.updateOne({_id:enquiryId},updateObj)
     res.send({
        status:1,
        msg:"data updated",
        updateRes
     })
}
module.exports={enquiryInsert , enquiryList , deleteData , enquiryFind , enquiryUpdate}