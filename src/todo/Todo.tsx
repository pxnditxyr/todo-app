import { TodoAdd } from './components/TodoAdd';
import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList';
import { TodoTitle } from './components/TodoTitle';

import './todo.css';

export const Todo = () => {
    
    return (
        <TodoProvider>
            <div className="container">
                <TodoTitle />
                <TodoAdd />
                <TodoList />
            </div>
        </TodoProvider>
    );
}
