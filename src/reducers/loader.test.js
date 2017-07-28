import { expect } from 'chai'
import store from '../index'
import { initialloadingEnd } from './loader'


describe('Action to be dispatched after initial data loading', () => {
    it('it should notigify the end of initial data load', () => {
        dispatch(initialloadingEnd({chainLoading: true}))
        expect(getState().loader.chainLoading).to.equal(true)
    })
})