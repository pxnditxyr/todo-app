import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
    const { todoState, addTodo, editTodo, toggleTodo, deleteTodo } = useContext( TodoContext );
    const { todos } = todoState;

    return {
        todos,
        pendingTodos: todos.filter( todo => !todo.completed ).length,
        amountTodos: todos.length,
        addTodo,
        editTodo,
        toggleTodo,
        deleteTodo,
    }
}
