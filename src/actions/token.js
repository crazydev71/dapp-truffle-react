import store from '../index'


export const ADD_CONTRACT = 'ADD_CONTRACT'


export function addContractService(name, contract, provider) {
    let contractInstance
    return new Promise(function(reject, resolve){
        contract.setProvider(provider)
        resolve(contract)
    }).catch(function(contract){
        contract.deployed().then(function(instance){
            console.log('tokenInstance: ', instance)
            contractInstance = instance
            return instance.totalSupply()
        }).then(function(result){
            console.log('total supply: ', result.c[0])
            console.log("here instance", contractInstance)
            addContractServiceAction({
                name,
                instance: contractInstance,
                totalSupply: result.c[0],
                address: contractInstance.address
            })
        })
    });
}

export function addContractServiceAction(contract){
    store.dispatch({
        type: ADD_CONTRACT,
        name: contract.name,
        instance: contract.instance,
        totalSupply: contract.totalSupply,
        address: contract.address
    })
}