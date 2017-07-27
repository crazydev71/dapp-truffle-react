import { ADD_DAO_CONTRACT } from '../actions/dao'


// error handling, for displaying to user
function addContractService(state = {} , action) {

    switch(action.type){
        case ADD_DAO_CONTRACT:
            return {
                name: action.name,
                instance: action.instance, 
                address: action.address
            }
        default:
            return state
    }
}


export default addContractService;