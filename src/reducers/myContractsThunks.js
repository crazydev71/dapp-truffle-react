import { addMyContract } from './myContracts'


//thunks

//dispatch a dao contract copy to my user contracts
export const loadNewDaoContract = (sharesToVote, minutesForDebate) =>
  (disptach, getState) => {
    const masterToken = getState().masterContracts.contracts[1].instance
    const masterDao= getState().masterContracts.contracts[1].instance
    const web3 = getState().web3
    let accountsList
    web3.eth.getAccounts((error, accounts) => {
      accountsList = accounts
      masterToken.new({
        from: accountsList[0],
        gas: 4712388,
        gasPrice: 100000000000
      })
      .then(instance => {
        console.log('mytoken: ', instance)
        const tokenAddress = instance.address
        masterDao.new(tokenAddress, sharesToVote, minutesForDebate, {
          from: accountsList[0],
          gas: 4712388,
          gasPrice: 100000000000
        })
        .then(instance => {
          console.log('myDAO: ', instance)
          disptach(addMyContract({
            type: 'dao',
            instance: instance
          }))
        })
      })
    })

  }
