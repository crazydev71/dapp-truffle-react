import store from '../index'
export const INITIAL_LOADING_END = 'INITIAL_LOADING_END'

export function loedingEnd(){
    store.dispatch({
        chainLoading: true
    })
}