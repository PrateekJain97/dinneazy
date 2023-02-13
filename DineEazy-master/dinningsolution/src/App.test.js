import React from "react";
import { render, screen } from "@testing-library/react";
import { store } from "./ReduxStateManagement/store";
import Logo from "./Components/Logo";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderName from "./Components/HeaderName";

describe("With React Testing Library", () => {
  it('Logo Rendering"', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Logo />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("DineEazy.")).not.toBeNull();
  });

  it('Shows welcome to message on Home', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderName />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Welcome to the")).toBeInTheDocument();
  });
});

describe("buton text on home",()=>{

  it('Shows welcome to message on Home', () => {
  render(
    <Provider store={store}>
    <BrowserRouter>
      <HeaderName />
    </BrowserRouter>
  </Provider>
  );
  expect(screen.getByRole('button')).toHaveTextContent('Menu')
})
})
