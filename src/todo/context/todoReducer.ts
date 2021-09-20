import { TodoState, Todo } from '../interfaces/interfaces';

type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'editTodo', payload: { id: string, description: string } }
    | { type: 'toggleTodo', payload: { id: string } }
    | { type: 'deleteTodo', payload: { id: string } };

export const todoReducer = ( state : TodoState, action : TodoAction ) : TodoState => {
    switch ( action.type ) {
        case 'addTodo':
            return {
                ...state,
                todos: [ 
                    ...state.todos, 
                    action.payload
                ]
            }

        case 'editTodo':
            return {
                ...state,
                todos: state.todos.map( ({ ...todo }) => {
                    if ( todo.id === action.payload.id ) {
                        todo.description = action.payload.description 
                        todo.id = action.payload.description
                    }
                    return todo;
                })
            }

        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map( ({ ...todo }) => {
                    if ( todo.id === action.payload.id )
                        todo.completed = !todo.completed! 
                    return todo;
                })
            }

        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter( ({ ...todo }) => {
                    return todo.id !== action.payload.id;
                })
            }


        default:
            return state;
    }
}
