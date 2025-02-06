import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <div style={{width: '400px', margin: 'auto'}}>
      <LocalizationProvider dateAdapter={AdapterDatyjs}>
        <Button onClick={() => setOpen(true)}>Dodaj zadanie</Button>
        <CreateTodo categories={categories} open={open} onSave={handleSave}/>
        <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} onCompletion={handleCompletion}/>
      </LocalizationProvider>
    </div>
  )
}

useEffect(() => {
  const url = `${API_BASE}/categories`
  axios.get(url).then(response => setCategories(response.data))
}  , [])

useEffect(() => {
    getTodos()
}, [])

const [categories, setCategories] = useState([])
const [todos, setTodos] = useState([])
const [open, setOpen] = useState(false)

const getTodos = () => {
  const url = `${API_BASE}/todos`
  axios.get(url).then(response => setTodos(response.data))
}

const handleSave = (title, description, category, dueDate, completed) => {
  const url = `${API_BASE}/todos`
  const data = {
    title,
    description,
    category,
    due_date: dueDate,
    completed: completed == 'true' ? true : false,
  }

  axios.post(url, data).then(response => {
    setOpen(false)
    getTodos()
  })
}

const handleDelete = (id) => {
  const url = `${API_BASE}/todos/${id}`
  axios.delete(url).then(response => {
    getTodos()
  })
}

const handleUpdate = (todo) => {
}

const handleCompletion = (todo) => {
}

export default App