import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice ({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state,action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id )
      const anecdoteChange = {...anecdoteToChange, votes: anecdoteToChange.votes +1}
      return state.map( a => a.id === id ? anecdoteChange : a)
    },
    setAnecdote(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload) 
    }
  }
})

export const anecdotesOrdenadas = (anecdotes) => {
  return [...anecdotes].sort((a,b)=> b.votes - a.votes)
}


export const {voteAnecdote, setAnecdote, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  } 
}

export default anecdoteSlice.reducer