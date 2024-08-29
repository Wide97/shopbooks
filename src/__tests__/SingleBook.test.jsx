import { render, screen } from "@testing-library/react"
import SingleBook from '../components/SingleBook'
import fantasy from '../Books/fantasy.json'


describe ('on click border red', () => {
    it('clicking on card transform card with border red', () => {
        render(<SingleBook/>)
    })
})