import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info) => {
        console.log(info)
        try {
            // const { data } = await api.post('/admin-login', info, { withCredentials: true })
            // localStorage.setItem('accessToken', data.token)
            // return fulfillWithValue(data)
        } catch (error) {
            // return rejectWithValue(error.response.data)
        }
    }
)
export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
       
    },
    reducers: {
       
    },
    extraReducers: {
        
    }

})
export default authReducer.reducer