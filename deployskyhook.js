const fs           = require('fs')
const Web3         = require('web3')
const BigNumber    = require('bignumber.js')
const Moment       = require('moment')
const Chai         = require('chai')
assert = Chai.assert

const Utils = require('./utils.js')

async function run() {
  const config = JSON.parse(fs.readFileSync('./config.json'))
  const web3 = await Utils.buildWeb3(config.web3Url)
  accounts = await web3.eth.getAccounts()

  owner = accounts[1]
  ops = accounts[2]
  wallet = accounts[3]

  var o = null
  var receipt = null
  var returnValues = null
  var deploymentResult = null

  assert.equal(web3.utils.checkAddressChecksum(owner),true)
  assert.equal(web3.utils.checkAddressChecksum(ops),true)
  assert.equal(web3.utils.checkAddressChecksum(wallet),true)

  deploymentResult = await Utils.deployContract(web3, 'SkyHook',[ ],{ from: owner })
  recordTransaction('SkyHook.new', deploymentResult.receipt, false)
}
