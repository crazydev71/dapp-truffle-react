import store from '../index'

export const ADD_DAO_CONTRACT = 'ADD_DAO_CONTRACT'
export function addDaoContractAction(contract){
    store.dispatch({
        type: ADD_DAO_CONTRACT,
        name: contract.name,
        instance: contract.instance,
        address: contract.address
    })
}