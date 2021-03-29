import mongoose from 'mongoose'
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    accountNo :{
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required : [true , 'account no is a required field']
    },
    transType :{
        type : String,
        enum : ['Deposit' , 'Withdraw'],
        required : [true , 'Transaction type is a required field']
    },
    amount : {
        type : Number,
        min : [0, 'Amount can not be negative'],
        required : [true , 'amount is required field']
    }
})

export default mongoose.model('Transaction' , transactionSchema)