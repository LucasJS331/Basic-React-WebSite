import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Search } from "."

describe("<Search />", ()=>{
    it("shoud be in document", ()=>{
        let fn = jest.fn();
        render(<Search placeholder={"search here"} onChange={fn} value={"test"} />);
        expect.assertions(1);
        const search = screen.getByPlaceholderText("search here");
        expect(search).toBeInTheDocument();

    })

    it("shoud be call function on key press", ()=>{
        let fn = jest.fn();
        render(<Search placeholder={"search here"} onChange={fn} value={"test"} />);

        let search = screen.getByPlaceholderText("search here");
        userEvent.type(search, "dev");

        expect(fn).toBeCalledTimes(3);
    })

    it("should be match snapshot", ()=>{
        let fn = jest.fn();
        let {container} = render(<Search placeholder={"search here"} onChange={fn} value={"test"} />);
        expect(container.firstChild).toMatchSnapshot();


    })
})
