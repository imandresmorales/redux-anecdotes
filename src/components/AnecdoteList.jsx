import { anecdotesOrdenadas, updateAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter == "")
            return state.anecdote
        else (state.filter !== "")
        return state.anecdote.filter(
            anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })

    const votar = (anecdote) => {
        dispatch(updateAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 2))
    }

    return (
        <>
            {anecdotesOrdenadas(anecdotes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => votar(anecdote)}>vote</button>
                    </div>
                </div >
            )}
        </>
    )
}

export default AnecdoteList