import { anecdotesOrdenadas, voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter == "")
            return state.anecdote
        else (state.filter !== "")
        {

            return state.anecdote.filter(
                anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        }

    })

    return (
        <>
            {anecdotesOrdenadas(anecdotes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList