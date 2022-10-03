import { createSlice } from "@reduxjs/toolkit";

export const SystemReducer = createSlice({
    name : 'system',
    initialState : {
        isLoading : false,
        isError : false,
        MessageAlert : undefined,
        typeAlert : undefined,
        isOpenModalEdit : false,
        data : undefined,
    },
    reducers : {
        reset : (state,action) => {
            state = state.initialState;
        },
        setIsOpenModalEdit : (state, action) => { 
            state.isOpenModalEdit = true;
            state.data = action.payload;
         }
    }
});