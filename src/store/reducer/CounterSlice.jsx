import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    studentData:[],
}

const counterSlice = createSlice({
    name:"shan",
    initialState,
    reducers:{
        add : (state,action) => {
            state.value = state.value+1;
        },
        addStudent: (state,action) => {
            state.studentData.push(action.payload);
        }
    }

})

export const {add,addStudent} = counterSlice.actions
export default counterSlice.reducer