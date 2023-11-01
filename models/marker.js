const { default: mongoose } = require('mongoose');
const monngoose = require('mongoose');

const markerSchema = monngoose.Schema(
    {
        sensor_num:{
            type:Number,
            required:[true,"Please send with sensor number"]
        },
        lat:{
            type:Number,
            required:[true,"Please send with lattitude"]
        },
        lon:{
            type:Number,
            required:[true,"Please send with longtitude"]
        },
        temp:{
            type:Number,
            required:[true,"Please send with temparature"]
        },
        co2:{
            type:Number,
            required:[true,"Please send with Co2 Level"]
        },
        aqi:{
            type:Number,
            required:[true,"Please send with aqi"]
        },
        place:{
            type:String,
            required:[true,"Please send with Place"]
        },
        overall:{
            type:String,
            required:[true,"Please send with Overall Info"]
        }
    },{
        timestamps:true
    }
);

const Marker = mongoose.model('Marker',markerSchema);

module.exports = Marker;