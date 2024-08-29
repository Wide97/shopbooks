import { render, screen } from "@testing-library/react"
import Welcome from '../components/Welcome'


describe ('component Welcome', () => {
    it ('mounts Welcome correctly at launch', () => {
        render (<Welcome/>)
        const sectionWelcome = screen.getByText(/benvenuti in epibooks!/i);
        expect (sectionWelcome).toBeInTheDocument()
    })
})