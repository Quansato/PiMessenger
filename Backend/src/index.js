const morgan = require("morgan");
const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3333;

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/api",(req,res)=>{
    res.json({
        message:"test server"
    })
})

app.listen(port,()=>{
    console.log("Listen on port: " + port);
})