let express = require('express');
const { enquiryInsert, enquiryList, deleteData, enquiryFind, enquiryUpdate } = require('../../controllers/web/enquiryController');
let enquiryRouter = express.Router();

enquiryRouter.post("/insert",enquiryInsert) 

enquiryRouter.get("/view",enquiryList)

enquiryRouter.delete("/delete/:id",deleteData)

enquiryRouter.get("/find/:id",enquiryFind)

enquiryRouter.put("/update/:id",enquiryUpdate)


module.exports = enquiryRouter;
