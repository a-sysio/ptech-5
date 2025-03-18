import React, {useState} from 'react';
import { Dialog, Typography, FormControl, Stack, TextField, Select, MenuItem, Checkbox, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateTodo = ({categories, open, onSave}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState(null)
    const [completed, setCompleted] = useState(false)
    
    return (
        <Dialog open={open}>
            <Typography variant="h2">
                Nowe zadanie
            </Typography>
            <FormControl>
                <Stack spacing={2}>
                    <TextField
                        label="Nazwa zadania"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                        label="Opis"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <Select
                        label="Kategoria"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        {categories.map(category =>
                            <MenuItem key={`category-${category.id}`} value={category.id}>{category.name}</MenuItem>)
                        }
                    </Select>
                    <DatePicker
                        label="Basic date time picker"
                        value={dueDate}
                        onChange={(value) => setDueDate(value)}
                    />
                    <Stack spacing={2} direction="row">
                        <Checkbox
                            label="Ukończone"
                            value={completed}
                            onChange={(event) => setCompleted(event.target.value)}
                        />
                        <Typography>Ukończone</Typography>
                    </Stack>
                    <Button onClick={() => handleSave()}>Dodaj</Button>
                </Stack>
            </FormControl>
        </Dialog>
    )
}

export default CreateTodo;