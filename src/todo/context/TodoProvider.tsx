import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

const INITIAL_STATE : TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            description: "Fix indent of typescript and jsx",
            completed: false
        },
        {
            id: "2",
            description: "Install more lsp",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[],
}

export const TodoProvider = ( { children }: TodoProviderProps ) => {

    const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE );

    return (
        <TodoContext.Provider
            value={{ todoState }}
        >
            { children }
        </TodoContext.Provider>
    );
}
