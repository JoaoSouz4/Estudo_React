import { useState, useRef } from 'react';
import Title from '../Title'
import { Input, FormComponent, TextArea } from './styles';

function Form(){

;    interface MyObject {
        name: string,
        comment: string,
    }

    const [formData, setFormData] = useState<MyObject>(
        {
            name: '',
            comment: ''
        }
    );
 
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.table(formData);
        setFormData({
            name: '',
            comment: ''
        })
    }
    return (
        <>
            <Title>Formulário</Title>
            <FormComponent onSubmit={handleSubmit}>
                <Input placeholder='Your name' onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                <TextArea placeholder='Your Comment' onChange={(e) => setFormData({...formData, comment: e.target.value})}/>
                <Input type="submit" />
            </FormComponent>
        </>
    )
}

export default Form;