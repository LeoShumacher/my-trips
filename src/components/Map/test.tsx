import { render,screen } from "@testing-library/react";
import Map from ".";
import place from ".";


describe ('<Map />', () => {

    it('should render without any marker', () => {
        render(<Map />)

        expect (screen.getByRole('link', {
            name: /a js library for interactive maps/i
        })
        ).toBeInTheDocument()

        
    })
    it ('should render with the marker in correct place', () => {

        const place = {
            id: '1',
            name: 'Rio de Janeiro',
            slug: 'rio de janeiro',
            location: {
                latitude: 0,
                longitude: 0
            }
        }

        const place2 = {
            id: '1',
            name: 'Portugal',
            slug: 'portugal',
            location: {
                latitude: 20,
                longitude: -3
            }
        }

        render(<Map places={[place, place2]}/>)

        expect(screen.getByTitle(/Rio de Janeiro/))
        expect(screen.getByTitle(/Portugal/))

    })

})