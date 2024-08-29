import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"

describe ('Comment Area mounts correctly', () => {
    it('Comments mounts correctly', () => {
        render(<CommentArea/>)
        const verifiedComments = screen.queryByTestId('comments')
        expect (verifiedComments).toBeInTheDocument()
    })
})