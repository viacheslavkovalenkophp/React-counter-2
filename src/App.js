import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AddTodo from './components/AddTodo';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList'; // Импортируем компонент

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>TODO App</h1>
                <AddTodo />
                <TodoList /> {/* Добавляем отображение списка задач */}
                <TodoFooter />
            </div>
        </Provider>
    );
};

export default App;
