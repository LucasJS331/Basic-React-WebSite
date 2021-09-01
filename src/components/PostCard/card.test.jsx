import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import {Mock} from "./mock"

describe("<PostCard />", ()=>{
    it("shoud be in the screen",()=>{
        render(<PostCard posts={Mock} />);

        expect(screen.getByRole("heading", {name: "teste 1"} )).toBeInTheDocument;
        expect(screen.getByAltText("teste 1")).toHaveAttribute("src", "cover teste 1");
        expect(screen.getByText("body teste 3")).toBeInTheDocument();
    })

    it("shoud be match with snapshot", ()=>{
     let {container} =  render(<PostCard posts={Mock} />)

     expect(container.firstChild).toMatchSnapshot("PostCard");

    })

    it("should not render the component", ()=>{
        render(<PostCard posts={[]}/>);

        expect(screen.queryByRole("heading", {name: "teste 1"})).not.toBeInTheDocument()

    })
})
