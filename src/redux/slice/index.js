import { combineReducers } from 'redux'

import mainSliceReducer from './mainSlice'
import userSliceReducer from './userSlice'

export const rootReducer = combineReducers({
    oyatsu: mainSliceReducer,
    user: userSliceReducer
})