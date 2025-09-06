import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import WordForm from "./WordForm";

describe('<WordForm />', () => {
    const onSubmitMock = jest.fn();

    it('should call onSubmit when button clicked', async () => {
        render(<WordForm onSubmit={onSubmitMock} loading={false} />);

        const input = screen.getByTestId('word-input').querySelector('input');
        const submitButton = screen.getByTestId('submit-button');

        expect(input).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        await userEvent.type(input!, 'hello');
        expect(input).toHaveValue('hello');

        await userEvent.click(submitButton);

        expect(onSubmitMock).toHaveBeenCalledWith('hello');
    });

    it('should disable the button while loading', () => {
        const mockOnSubmit = jest.fn();
        render(<WordForm onSubmit={mockOnSubmit} loading={true} />);

        const submitButton = screen.getByTestId('submit-button');
        expect(submitButton).toBeDisabled();
    });

})