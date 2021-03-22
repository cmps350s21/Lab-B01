let accounts = [
    {
        "accountNo": 1101,
        "acctType": "Current",
        "balance": 500
    },
    {
        "accountNo": 2002,
        "acctType": "Saving",
        "balance": 8000,
        "minimumBalance": 1000
    }
]
class AccountsServices {
    async getAccounts(req, res) {
        const query = req.query
        const filteredAccounts = accounts.filter(acc => acc.acctType == query.type)
        res.json(filteredAccounts)
    }

    async addAccount(req, res) {
        const account = req.body
        if (account)
            accounts.push(account)
        res.send('We are working on your request')
    }

    async updateAccount(req, res) {
        const account = req.body
        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index > 0) {
            accounts[index] = account
            res.send(`updated account ${JSON.stringify(account)}`)
        } else {
            res.send(`unable to update the account you are looking for`)
        }
    }

    async getAccount(req, res) {
        const accNo = req.params.acctNo
        const account = accounts.find(acc => acc.accountNo == accNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const accNo = req.params.acctNo
        accounts = accounts.filter(acc => acc.accountNo != accNo)
        res.send(`successfully deleted the account with account no ${accNo}`)

    }
}

export default AccountsServices