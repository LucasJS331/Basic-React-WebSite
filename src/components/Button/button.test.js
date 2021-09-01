import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."
import React from "react"

describe("<Button />", ()=>{
    it("should be in screen", ()=>{
        const fn = jest.fn();
        render(<Button text="ola" disabled={false} onClick={fn} />);
        expect.assertions(1);
        const button = screen.getByRole('button',{name: /ola/i});
        expect(button).toBeInTheDocument();
    })

    it("should desabled when prop desable are true",()=>{
        const fn = jest.fn();
        render(<Button text="ola" disabled={true} onClick={fn} />);
        expect.assertions(1);
        const button = screen.getByRole('button',{name: /ola/i});
        expect(button).not.toBeEnabled();

    })

    it("should be enabled when prop desable are false",()=>{
        const fn = jest.fn();
       render(<Button text="ola" disabled={false} onClick={fn} />);
        expect.assertions(1);
        const button = screen.getByRole('button',{name: /ola/i});
        expect(button).toBeEnabled();

    })

    it("shoub execute a funcion", ()=>{
        const fn = jest.fn();
        render(<Button text="ola" disabled={false} onClick={fn} />);
        expect.assertions(1);
        const button = screen.getByRole('button',{name: /ola/i});
        userEvent.click(button);

        expect(fn).toBeCalledTimes(1);
    })
})
