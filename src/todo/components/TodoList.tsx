import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

import './todoList.css';

export const TodoList = () => {

    const { todos }  = useTodos();

    return (
        <ul>
            {
                todos.length > 0
                ?
                todos.map( todo =>
                    <TodoItem key={ todo.id } todo={ todo }/>
                )
                :
                ( <p className="no-todos" > You don't have any Todo </p> )
            }
        </ul>
    )
}
