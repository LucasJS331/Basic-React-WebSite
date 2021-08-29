import { render, screen } from "@testing-library/react"
import { Button } from "."

describe("<Button />", ()=>{
    it("should be in screen", ()=>{
        render(<Button text="ola"/>)
    
        expect.assertions(1);

        const button = screen.getByRole('button',{name: /ola/i})

        expect(button).toBeInTheDocument();
    })
})