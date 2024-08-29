import BookList from "../components/BookList";
import { fireEvent, render, screen } from "@testing-library/react"
import fantasy from '../Books/fantasy.json'

describe("Searching book find an element", () => {
  it("correctly find Books", () => {
    render(<BookList books={(fantasy)}/>);
    const searchBook = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(searchBook, {target: {value: 'Game of'}})
    const book = screen.getAllByTestId('book')
    expect(book).toHaveLength(1)
  });
});
