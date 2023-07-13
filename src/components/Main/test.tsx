import { render, screen } from '@testing-library/react'
import Main from '.'
import { toHaveStyle } from '@testing-library/jest-dom/matchers';


describe ('<Main />', () => {
    it ('should render the heading', () => {

        const { container } = render(<Main />)

        expect(screen.getByRole('', {name: /react avançado/i}))
        .toBeInTheDocument()

        expect(container.firstChild).toMatchSnapchot()

    });


})

