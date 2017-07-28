import { addMyContract, updateInfo } from './myContracts'


//thunks

//dispatch a dao contract copy to my user contracts
export const loadNewDaoContract = (sharesToVote, minutesForDebate) =>
  (disptach, getState) => {
    const masterToken = getState().masterContracts.contracts[1].instance
    const masterDao= getState().masterContracts.contracts[0].instance
    const web3 = getState().blockchain.web3_Ethereum
    let accountsList, tokenAddress
    web3.getAccounts((error, accounts) => {
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

    const promises = [
      selected.owner.call(),
      selected.debatingPeriodInMinutes.call(),
      selected.minimumQuorum.call(),
      selected.receivedTokens.call(),
      selected.receivedEther.call(),
      selected.sharesTokenAddress.call(),
      selected.numProposals.call()
    ]

    Promise.all(promises)
    .then(res => {
      console.log('fetch DAO info res: ',res)
      const info = {
        owner: res[0],
        debatingPeriodInMinutes: res[1].c[0],
        minimumQuorum: res[2].c[0],
        receivedTokens: res[3],
        receivedEther: res[4],
        sharesTokenAddress: res[5],
        numProposals: res[6].c[0]
      }
      console.log('fetch DAO info: ',info)
      dispatch(updateInfo(info))
    })
  }
