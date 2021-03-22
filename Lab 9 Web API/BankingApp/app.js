import express from 'express'

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
const port = 3000

const app = express()
app.use(express.static('public'))

//add a midleware
app.use(express.json())
//dynamic
app.get('/api/accounts', (req, res) => {
    const query = req.query
    const filteredAccounts = accounts.filter(acc => acc.acctType == query.type)
    res.json(filteredAccounts)
})

app.get('/api/accounts/:acctNo', (req, res) => {
    const accNo = req.params.acctNo
    const account = accounts.find(acc => acc.accountNo == accNo)
    res.json(account)
})

app.delete('/api/accounts/:acctNo', (req, res) => {
    const accNo = req.params.acctNo
    accounts = accounts.filter(acc => acc.accountNo != accNo)
    res.send(`successfully deleted the account with account no ${accNo}`)

})
app.post('/api/accounts', (req, res) => {
    const account = req.body
    if (account)
        accounts.push(account)
    res.send('We are working on your request')
})

app.put('/api/accounts', (req, res) => {
    const account = req.body
    const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
    if (index > 0) {
        accounts[index] = account
        res.send(`updated account ${JSON.stringify(account)}`)
    } else {
        res.send(`unable to update the account you are looking for`)
    }
})

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

// account.json file => repository => service => router=> app

