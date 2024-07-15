import { createSlice } from "@reduxjs/toolkit"

export const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice ({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
      return state.concat({
        content: action.payload,
        id: getId(),
        votes: 0
      })
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

export const {newAnecdote, voteAnecdote, setAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer