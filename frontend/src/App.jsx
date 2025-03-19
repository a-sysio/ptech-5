import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TodoList from './Todo';
import CreateTodo from './CreateTodo.jsx';
import { API_BASE } from './config';

const App = () => {
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const url = `${API_BASE}/categories`
    axios.get(url).then(response => setCategories(response.data))
  }  , [])
  
  useEffect(() => {
      getTodos()
  }, [])
  
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

  return (
    <div style={{width: '400px', margin: 'auto'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Button onClick={() => setOpen(true)}>Dodaj zadanie</Button>
        <CreateTodo categories={categories} open={open} onSave={handleSave}/>
        <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} onCompletion={handleCompletion}/>
      </LocalizationProvider>
    </div>
  )
}

export default App