import { Paper, Typography, Stack, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Done as DoneIcon } from '@mui/icons-material';
    const Todo = ({id, title, description, onDelete, onEdit, onCompletion}) => {
    const handleDelete = (id) => {
        onDelete(id)
    }

    const handleEdit = (id) => {
        onEdit(id)
    }

    const handleCompletion = (id) => {
        onCompletion(id)
    }

    return (
        <Paper style={{ padding: '10px' }}>
            <Stack spacing={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Stack direction="row" spacing={1}>
                <IconButton onClick={() => handleCompletion(id)}>
                    <DoneIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(id)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
            </Stack>
        </Paper>
    )
}

export default Todo;