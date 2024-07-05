import { useSelector, useDispatch } from 'react-redux'
import {getId} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const createAnecdote = (id) => {
    return {
      type: 'VOTE',
      payload: {
        id: id
      }    
    }
  } 

  const anecdotesOrdenadas = () => {
    return [...anecdotes].sort((a,b)=> b.votes - a.votes)
  }
  
  const newAnecdote = (anecdote) => {
    return{
      type:'NEW_NOTE',
      payload: {
          content: anecdote,
          id: getId(),
          votes: 0
      }
    }
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value=''
    dispatch(newAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesOrdenadas().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(createAnecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App