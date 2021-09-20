import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { useTodos } from '../hooks/useTodos';

import './todoAdd.css';

interface FormData {
    description: string;
}

export const TodoAdd = () => {

    const { addTodo } = useTodos();

    const { description, handleInputChange, handleReset } = useForm<FormData>({
        description: "",
    });


    const handleSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        addTodo({
            id: description,
            description,
            completed: false,
        })
        handleReset();
    }

    return (
        <>
            <form
                className="todo-add-form"
                onSubmit={ handleSubmit }
                >
                <label> New Todo </label>
                <input
                    id="description"
                    type="text"
                    placeholder="Todo"
                    name="description"
                    value={ description }
                    onChange={ handleInputChange }
                />
            </form>
        </>
    );
}
