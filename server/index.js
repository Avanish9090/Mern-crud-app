let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors'); // cors is used when you connection the frontend api with backend and  both are running on different
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();
app.use(cors());

app.use(express.json());

//Router
app.use("/api/website/enquiry",enquiryRouter)


//connect database
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Conncted to database succesfully");
    app.listen(process.env.PORT || 3000,()=> {
        console.log('server is running');
    })
}).catch((err)=>{
    console.log(err);
})