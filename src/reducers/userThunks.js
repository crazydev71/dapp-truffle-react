import { setUser } from './user.js'

//thunks

//dispatch setUser in order to set the default user to the store
export const loadUser = (user) =>
  (disptach) => {
    disptach(setUser(user))
  }
