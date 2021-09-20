import { useTodos } from '../hooks/useTodos';

import './todoTitle.css';

export const TodoTitle = () => {

    const { pendingTodos, amountTodos } = useTodos();

    return (
        <div className="todo-title">
            <h1> Todos: <span> { amountTodos } </span> </h1>
            <h3> Pending Todos: <span> { pendingTodos } </span> </h3>
        </div>
    )
}
