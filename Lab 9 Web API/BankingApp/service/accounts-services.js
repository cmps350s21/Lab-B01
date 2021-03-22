import AccountsRepo from "../repository/accounts-repo.js";
const accountRepo = new AccountsRepo()

class AccountsServices {
    async getAccounts(req, res) {
        const accounts = await accountRepo.getAccounts(req.query)
        res.status(200).json(accounts)
    }

    async addAccount(req, res) {
        const account = req.body
        await accountRepo.addAccount(account)
        res.status(201).send('successfully added your account')
    }

    async updateAccount(req, res) {
        const account = req.body
        await accountRepo.updateAccount(account)
        res.send('successfully updated')
    }

    async getAccount(req, res) {
        const accNo = req.params.acctNo
        const account  = await accountRepo.getAccount(accNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const accNo = req.params.acctNo
        await accountRepo.deleteAccount(accNo)
        res.send(`successfully deleted the account with account no ${accNo}`)

    }
}

export default AccountsServices