import { ChangeEvent, useState } from 'react';


export const useForm = <T extends Object>( initState : T ) => {
    
    const [ form, setForm ] = useState( initState );

    const handleInputChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value,
        })
    }

    const handleReset = () => setForm( initState );

    return { 
        form,
        handleInputChange,
        handleReset,
        ...form,
    }
}
