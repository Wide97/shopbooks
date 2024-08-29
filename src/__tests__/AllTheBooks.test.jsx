import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from '../Books/fantasy.json'

describe("Cards in the component", () => {
  it("number of cards in JSON", () => {
    render(<AllTheBooks />);
    const sumCards = screen.queryAllByTestId('cards')
    expect (sumCards).toHaveLength(fantasy.length)
  });
});
