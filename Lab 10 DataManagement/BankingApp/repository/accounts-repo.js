import fs from 'fs-extra'
import {fileURLToPath} from 'url';

const url = new URL('../data/accounts.json', import.meta.url);
const filePath = fileURLToPath(url);

class AccountsRepo {
    async getAccounts({type}) {
        const accounts = await fs.readJson(filePath)
        if (type == 'All')
            return accounts
        else if (type == 'Current' || type == 'Saving')
            return accounts.filter(acc => acc.acctType == type)
    }

    async addAccount(account) {
        const accounts = await fs.readJson(filePath)
        accounts.push(account)
        return await fs.writeJson(filePath, accounts)
    }

    async updateAccount(account) {
        const accounts = await fs.readJson(filePath)
        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index > 0) {
            accounts[index] = account
            return await fs.writeJson(filePath, accounts)
        }
        return null
    }

    async getAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == accNo)
        return account
    }

    async deleteAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const filteredAccounts = accounts.filter(acc => acc.accountNo != accNo)
        return await fs.writeJson(filePath, filteredAccounts)
    }
}

export default AccountsRepo