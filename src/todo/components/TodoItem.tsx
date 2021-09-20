import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';
import { TodoEditDescription } from './TodoEditDescription';

import './todoItem.css';

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ( { todo } : TodoItemProps ) => {

    const { toggleTodo, deleteTodo } = useTodos();

    return (
        <>
            <li
                className="todo-item"
            >
                <section className="description-item">
                    <TodoEditDescription todo={ todo }/>
                </section>
                <section className="change-items">
                    <span
                        onDoubleClick={ () => toggleTodo( todo.id ) }
                        style={{
                            color: todo.completed ? "green" : "red"
                        }}
                    > 
                        { todo.completed ? "✔" : "✘" }
                    </span>
                    <span onClick={ () => deleteTodo( todo.id ) }>
                    🗑️
                    </span>
                </section>
            </li>
        </>
    );
}
