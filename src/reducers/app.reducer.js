import {createSlice} from "@reduxjs/toolkit"
import { sendRequest } from "../helpers";

const initialState = {
    projects: [],
    projectPage: JSON.parse(localStorage.getItem('Project')) || {}
};


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        actionProjects:(state, {payload}) =>{
            state.projects = [...payload]
        },
        actionProjectPage: (state, {payload}) =>{
            localStorage.setItem('Project', JSON.stringify(payload));
            state.projectPage = payload
            console.log(state.projectPage)
        }
    }
});

export const {actionProjects, actionProjectPage} = appSlice.actions

export const actionFetchProjects = () => (dispatch) =>{
    console.log('asassa')
    return sendRequest('./data.json')
        .then((result) =>{
            dispatch(actionProjects(result))
        })
}



export default appSlice.reducer