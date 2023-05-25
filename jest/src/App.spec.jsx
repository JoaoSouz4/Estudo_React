import { render, fireEvent, findByText, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';



import App from './App';

//qual componente será testado
describe('App Component', () => {
    it('should render list items', () => {
        const {getByText} = render(<App/>);
        expect(getByText('João')).toBeInTheDocument();
        expect(getByText('Vitor')).toBeInTheDocument();
        expect(getByText('Souza')).toBeInTheDocument();
    });

    it('should be to add new item to the list', async() => {
        const {getByText, getByPlaceholderText, findByTex} = render(<App/>);
        const addButton = getByText('Adicionar');
        const inputElement = getByPlaceholderText('novo item');

        userEvent.type(inputElement, 'Novo');
        userEvent.click( addButton );

        await waitFor(() => {
            expect( findByText('Novo')).toBeInTheDocument();
        })

    })
});