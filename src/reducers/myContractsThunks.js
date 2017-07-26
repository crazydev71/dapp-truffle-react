import { addMyContract, updateInfo } from './myContracts'


//thunks

//dispatch a dao contract copy to my user contracts
export const loadNewDaoContract = (sharesToVote, minutesForDebate) =>
  (disptach, getState) => {
    const masterToken = getState().masterContracts.contracts[1].instance
    const masterDao= getState().masterContracts.contracts[1].instance
    const web3 = getState().web3
    let accountsList, tokenAddress
    web3.eth.getAccounts((error, accounts) => {
      accountsList = accounts
      masterToken.new({
        from: accountsList[0],
        gas: 4712388,
        gasPrice: 100000000000
      })
      .then(instance => {
        console.log('mytoken: ', instance)
        tokenAddress = instance.address
        masterDao.new(tokenAddress, sharesToVote, minutesForDebate, {
          from: accountsList[0],
          gas: 4712388,
          gasPrice: 100000000000
        })
        .then(instance => {
          console.log('myDAO: ', instance)
          //ADD LISTENERS TO ALL CONTRACTS
          disptach(addMyContract({
            type: 'dao',
            instance: instance,
            relatedToken: tokenAddress
          }))
        })
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }

//fetch some related info of selectedContract
export const fetchSelectedInfo = () =>
  (dispatch, getState) => {
    const selected = getState().myContracts.selected.instance
    const user = getState().user.accountAddress
    let owner, balance, totalSupply, name, symbol, decimals

    selected.owner.call()
    .then(res => {
      owner = res
      return selected.balanceOf.call(user)
    })
    .then(res => {
      balance = res
      return selected.totalSupply.call()
    })
    .then(res => {
      totalSupply = res
      return selected.name.call()
    })
    .then(res => {
      name = res
      return selected.symbol.call()
    })
    .then(res => {
      symbol = res
      return selected.decimals.call()
    })
    .then(res => {
      decimals = res
      const info = {
        owner: owner,
        ownerBalance: balance.c[0],
        totalSupply: totalSupply.c[0],
        name: name,
        symbol: symbol,
        decimals: decimals.c[0]
      }
      dispatch(updateInfo(info))
    })
    .catch((error) => {
      console.log(error)
    })
  }
