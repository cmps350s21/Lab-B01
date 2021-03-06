import express from 'express'
import AccountsServices from "./service/accounts-services.js";

const accountService = new AccountsServices()

const router = express.Router()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:acctNo/trans')
    .post(accountService.addTransaction)
    .get(accountService.getTransaction)

export default router