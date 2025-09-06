import {render, screen} from "@testing-library/react";
import ErrorCard from "./ErrorCard";

describe('<ErrorCard />', () => {

    it('should render error message', () => {
        render(<ErrorCard message="Word Not Found" />);

        expect(screen.getByText('Word Not Found')).toBeInTheDocument();
    })
})