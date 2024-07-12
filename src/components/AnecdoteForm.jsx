import { useDispatch } from "react-redux"
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(newAnecdote(content))
        dispatch(showNotification(`you added "${content}"`))
        setTimeout(() => {
            dispatch(hideNotification(`NO NOTIFICATION`))
        }, 5000);
    }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type='submit'>create</button>
            </form>
        </>

    )
}

export default AnecdoteForm