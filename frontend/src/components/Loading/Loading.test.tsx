import { render, screen } from '@testing-library/react';

import { describe, test } from "vitest";
import { Loading } from "./Loading.tsx"
describe('App', () => {
  test('renders headline', () => {
    render(<Loading />);

    screen.debug();

    // check if App components renders headline
  });
});
