// {
//
//     "acctType": ""
//     "balance": 8000, [-10]

// }

import mongoose from 'mongoose'
const Schema = mongoose.Schema

//config Objeect
const options = {
    toJSON : {
        virtuals : true
    }
}
const accountSchema = new Schema({
    accType: {
        type: String,
        enum: ['Saving', 'Current'],
        required: [true, 'Account type can not be empty']
    },
    balance: {
        type: Number,
        min: [0, 'You can not have a negative account balance'],
        required: [true, 'Balance can not be empty']
    }
}, options)

accountSchema.virtual('accountNo').get(function () {
    return this._id
})

accountSchema.virtual('interestRate').get(function () {
    return this.balance * 0.5
})

export default mongoose.model('Account', accountSchema)