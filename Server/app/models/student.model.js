const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({

    academicYear: {
        type: String,
    },
    semester: {
        type: String,

    },
    group_mo: {
        type: Number,

    },
    subgroup_mo: {
        type: Number,

    },
    program: {
        type: String,

    },
    subgroup_ID: {
        type: String,
    },
    rooms: {
        type: [],
    },
    snv: {
        type: [] ,
    }, 

});
module.exports = mongoose.model('student', Student);
