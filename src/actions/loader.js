import store from '../index'
export const INITIAL_LOADING_END = 'INITIAL_LOADING_END'

export function loedingEnd(){
    console.log('yessssssssssssssssssssssss')
    store.dispatch({
        type: INITIAL_LOADING_END,
        chainLoading: true
    })
}