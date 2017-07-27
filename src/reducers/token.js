import { ADD_CONTRACT } from '../actions/token'


// error handling, for displaying to user
function addContractService(state = {} , action) {

    switch(action.type){
        case ADD_CONTRACT:
            return {
                name: action.name,
                instance: action.instance, 
                totalSupply: action.totalSupply,
                address: action.address
            }
        default:
            return state
    }
}


export default addContractService;