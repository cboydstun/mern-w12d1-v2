//import libraries
import axios from 'axios'

//import token
import setAuthToken from "../utils/setAuthToken"

export const register = async(dispatch, formData) =>{
    const config = {
        headers: {
            "Content-Type":"application/json",
        },
    };

    try {
        const res = await axios.post("/api/users", formData, config)
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: "REGISTER",
            payload: res.data
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: "REGISTER_FAIL", 
            payload: error.response.data.msg,
        })
    }
}

export const login = async(dispatch, formData) =>{
    const config = {
        headers: {
            "Content-Type":"application/json",
        },
    };

    try {
        const res = await axios.post("/api/auth", formData, config)
        localStorage.setItem("token", res.data.token)

        dispatch({
            type:"REGISTER",
            payload: res.data, 
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "REGISTER_FAIL", 
            payload: error.response.data.msg,
        })
    }
}

export const loadUser = async(dispatch) => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth')

        dispatch({type: "LOAD_USER", payload: res.data})
    } catch (error) {
        dispatch({type: "LOGIN_FAIL", payload: error.response.data.msg})
    }
}

export const addTodo = async (dispatch, formData) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
        },
    };
    
    try {
        axios.post('/api/todos', formData, config)
    } catch (error) {
        console.log(error.response.data.msg)
    }
}

export const loadTodos = async (dispatch) => {
    try {
      const res = await axios.get('/api/todos')  
      dispatch({type: "LOAD_TODOS", payload: res.data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async (dispatch, id) => {
    try {
        await axios.delete(`/api/todos/${id}`)
        loadTodos(dispatch)
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async (dispatch, id, formData) => {
    try {
        await axios.put(`/api/todos/${id}`, formData)
    } catch (error) {
        console.log(error)
    }
}