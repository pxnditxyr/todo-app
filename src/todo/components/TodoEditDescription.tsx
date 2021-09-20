import { useState, FormEvent } from 'react';
import { useTodos } from '../hooks/useTodos';
import { useForm } from '../hooks/useForm';
import { Todo } from '../interfaces/interfaces';

import './todoEditDescription.css';

interface FormDataTodoEdit {
    description: string;
}

interface TodoEditDescriptionProps {
    todo: Todo;
}


export const TodoEditDescription = ( { todo } : TodoEditDescriptionProps ) => {

    const [ isEditable, setIsEditable ] = useState( false );
    const { editTodo } = useTodos();

    const { description, handleInputChange } = useForm<FormDataTodoEdit>({
        description: todo.description,
    })

    const handleSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setIsEditable( !isEditable );
        editTodo( todo.id, description );
    }

    return (
        <>
            {
                !isEditable
                ?
                <p
                    onDoubleClick={ () => setIsEditable( !isEditable ) }
                    >
                    { todo.description }
                </p>
                :
                <form onSubmit={ handleSubmit }>
                    <input
                        id="description"
                        className="todo-edit-input"
                        name="description"
                        type="text"
                        value={ description }
                        onChange={ handleInputChange }
                    />
                </form>
            }
        </>
    );
};
