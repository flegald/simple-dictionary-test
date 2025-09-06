import DefinitionCard from "./DefinitionCard";
import {render, screen} from "@testing-library/react";
import {definitionMocks} from "../mocks/definitionMocks";

describe('<DefinitionCard />', () => {

    it('should render searched word', () => {
        render(<DefinitionCard data={definitionMocks} />);

        expect(screen.getByText('table')).toBeInTheDocument();
    });

    it('should render all parts of speech', () => {
        render(<DefinitionCard data={definitionMocks} />);

        expect(screen.getByText('noun')).toBeInTheDocument();
        expect(screen.getByText('verb')).toBeInTheDocument();
    })

    it('should render definition results', () => {
        render(<DefinitionCard data={definitionMocks} />);

        expect(screen.getByText(definitionMocks.meanings[0].definitions[0].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[0].definitions[1].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[0].definitions[2].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[0].definitions[3].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[0].definitions[4].definition)).toBeInTheDocument();

        expect(screen.getByText(definitionMocks.meanings[1].definitions[0].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[1].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[2].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[3].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[4].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[5].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[6].definition)).toBeInTheDocument();
        expect(screen.getByText(definitionMocks.meanings[1].definitions[7].definition)).toBeInTheDocument();
    });
})