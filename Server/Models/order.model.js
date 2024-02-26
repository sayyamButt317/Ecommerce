const mongoose = require('mongoose')

const orderitemschema = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderschema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderItems:{
        type:[orderitemschema]
    }
})