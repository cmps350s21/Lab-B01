import AccountsRepo from "../repository/accounts-repo.js";

const accountRepo = new AccountsRepo()

class AccountsServices {
    async getAccounts(req, res) {
        try{
            const accounts = await accountRepo.getAccounts(req.query)
            res.status(200).json(accounts)
        }catch (error) {
            res.status(500).send(error)
        }
    }

    async addAccount(req, res) {
        try{
            const account = req.body
            await accountRepo.addAccount(account)
            res.status(201).send('successfully added your account')
        }catch (error) {
            res.status(500).send(error)
        }
    }

    async updateAccount(req, res) {
        try{
            const account = req.body
            await accountRepo.updateAccount(account)
            res.send('successfully updated')
        }catch (error) {
            res.status(500).send(error)
        }

    }

    async getAccount(req, res) {
        try{
            const accNo = req.params.acctNo
            const account  = await accountRepo.getAccount(accNo)
            res.json(account)
        }catch (error) {
            res.status(500).send(error)
        }

    }

    async deleteAccount(req, res) {
        try{
            const accNo = req.params.acctNo
            await accountRepo.deleteAccount(accNo)
            res.status(200).send(`successfully deleted the account with account no ${accNo}`)
        }catch (error) {
            res.status(500).send(error)
        }

    }

    async addTransaction(req, res){
        try{
            const transaction = req.body
            await accountRepo.addTransaction(transaction)
            res.status(201).send('Transaction successfully added')
        }catch (error) {
            res.status(500).send(error)
        }

    }
    async getTransaction(req, res){
        try{
            const accNo = req.params.acctNo
            const transactions =await accountRepo.getTransaction(accNo)
            res.status(200).json(transactions)
        }catch (error) {
            res.status(500).send(error)
        }

    }
}

export default AccountsServices