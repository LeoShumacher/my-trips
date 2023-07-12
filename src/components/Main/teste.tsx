import { render, screen } from '@testing-library/react'
import Main from '.'
import { toHaveStyle } from '@testing-library/jest-dom/matchers';


describe ('<Main />', () => {
    it ('should render the heading', () => {

        const { container } = render(<Main />)

        expect(screen.getByRole('heading', {name: /react avançado/i}))
        .toBeInTheDocument()

        expect(container.firstChild).toMatchSnapchot()

    });

    it ('should render colors the correct', () => {

        const { container } = render(<Main />)

        expect(container.firstChild).toHaveStyle({'color: #fff;':toHaveStyle})

    })
})

