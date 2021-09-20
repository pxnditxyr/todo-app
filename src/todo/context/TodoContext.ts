import { createContext } from 'react';
import { TodoState, Todo } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    addTodo: ( todo: Todo ) => void;
    editTodo: ( id: string, description: string ) => void;
    toggleTodo: ( id: string ) => void;
    deleteTodo: ( id: string ) => void;
}

export const TodoContext = createContext<TodoContextProps>( {} as TodoContextProps );;
