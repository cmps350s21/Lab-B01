import Account from '../models/account.js'
import Transaction from '../models/account-trans.js'

class AccountsRepo {
    async getAccounts({type}) {
        if (type == 'All')
            return Account.find()
        else if (type == 'Current' || type == 'Saving')
            return Account.find({accType: type})
    }

    async addAccount(account) {
        return Account.create(account)
    }

    async updateAccount(updatedAccount) {
        return Account.findByIdAndUpdate(updatedAccount._id, updatedAccount)
    }

    async getAccount(accNo) {
        return Account.findOne({_id: accNo})
    }

    async deleteAccount(accNo) {
        return Account.deleteOne({_id: accNo})
    }

    async deleteAllAccounts() {
        return Account.delete()
    }
    async getTransaction(accountNo){
        return Transaction.find({accountNo})
    }
    async addTransaction(trans){
        trans.amount = parseInt(trans.amount.toString())
        //the account this transaction belongs too
        const account = await this.getAccount(trans.accountNo)

        if(trans.transType == 'Deposit')
            account.balance += trans.amount
        else
            account.balance -= trans.amount


        //we need to save this values back to the database
        const newTransaction = await Transaction.create(trans)
        await account.save()

        return newTransaction;
    }
}

export default AccountsRepo