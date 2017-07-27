import store from '../index'


export const ADD_TOKEN_CONTRACT = 'ADD_TOKEN_CONTRACT'
export function addContractServiceAction(contract){
    store.dispatch({
        type: ADD_TOKEN_CONTRACT,
        name: contract.name,
        instance: contract.instance,
        totalSupply: contract.totalSupply,
        address: contract.address
    })
}