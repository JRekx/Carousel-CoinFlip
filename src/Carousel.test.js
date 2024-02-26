import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("renders without crashing", function() {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  expect(asFragment()).toMatchSnapshot();
});

it("moves to the previous image when you click the left arrow", function() {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  // Move forward in the carousel to the second image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // Click the left arrow to move back to the first image
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // Expect the first image to show, and the second image not to be in the document
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();
});

it("hides the left arrow when on the first image", function() {
  const { queryByTestId } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  
  // Left arrow should not be in the document
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
});

it("hides the right arrow when on the last image", function() {
  const { queryByTestId, getByTestId } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  
  // Move to the last image
  const rightArrow = getByTestId("right-arrow");
  for (let i = 0; i < TEST_IMAGES.length - 1; i++) {
    fireEvent.click(rightArrow);
  }
  
  // Right arrow should not be in the document
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
});
