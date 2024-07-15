import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice ({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createNew(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state,action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id )
      const anecdoteChange = {...anecdoteToChange, votes: anecdoteToChange.votes +1}
      return state.map( a => a.id === id ? anecdoteChange : a)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const anecdotesOrdenadas = (anecdotes) => {
  return [...anecdotes].sort((a,b)=> b.votes - a.votes)
}

export const {createNew, voteAnecdote, setAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer