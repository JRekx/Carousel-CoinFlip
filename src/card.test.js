import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card 
    caption="testing image 1" 
    src="test1.com" 
    currNum={1} 
    totalNum={3} 
  />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Card 
      caption="testing image 1" 
      src="test1.com" 
      currNum={1} 
      totalNum={3} 
    />);
    expect(asFragment()).toMatchSnapshot();
  });