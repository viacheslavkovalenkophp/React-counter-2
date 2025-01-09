import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Paper, Box, Typography } from '@mui/material';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (taskToRemove) => {
        setTasks(tasks.filter((t) => t !== taskToRemove));
    };

    return (
        <Box my={4}>
            <Typography variant="h4" gutterBottom>
                Список задач
            </Typography>
            <Paper style={{ padding: '20px' }}>
                <TextField
                    label="Новая задача"
                    variant="outlined"
                    fullWidth
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={addTask} style={{ marginTop: '10px' }}>
                    Добавить задачу
                </Button>
                <List style={{ marginTop: '20px' }}>
                    {tasks.map((taskItem, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={taskItem} />
                            <Button color="secondary" onClick={() => removeTask(taskItem)}>
                                Удалить
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default TodoList;
