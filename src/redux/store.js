import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import themeReducer from './theme'

export default configureStore({
    reducer:{
        user: userReducer,
        theme: themeReducer
    }
})
