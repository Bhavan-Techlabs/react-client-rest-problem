import React from "react";
import renderer from "react-test-renderer";
import UserForm from "../components/UserForm";
import UserPage from "../pages/UserPage";
import { Provider } from "react-redux";

import { store } from "../store/store";

it("UserPage component renders", () => {
  const component = renderer.create(
    <Provider store={store}>
      <UserPage />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("UserForm component renders", () => {
  const component = renderer.create(<UserForm />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
