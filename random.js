import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimalForm from './AnimalForm';
test('Current Animals Test Species header is appearing', () => {
  // arrange - render the component
  const { getByText } = render(<AnimalForm />);
  // act - no action to take
  // assert - get the text from the DOM and expect it to be in the document
  const headerText = getByText(/current ANIMALS test SPECIES/i);
  expect(headerText).toBeVisible();
});
test('inputs are visible', () => {
  //ARRANGE - set up the testing environment
  const { getByLabelText } = render(<AnimalForm />);
  // ACT
  // NONE. Tapped out.
  // ASSERT
  getByLabelText(/species/i); // getByLabelText throws an exception when it fails -- so you can just use it to check that the input is in the DOM rather than having to say expect().toBeInDocument()! :cool:
  getByLabelText(/age/i);
  getByLabelText(/notes/i);
});
test('form submit adds new animals to the list', () => {
  const { getByLabelText, getByText, getByTestId } = render(<AnimalForm />);
  // querying for all the input nodes
  const speciesInput = getByLabelText(/species/i);
  const ageInput = getByLabelText(/age/i);
  const notesInput = getByLabelText(/notes/i);
  // ACT
  // use the change event to add text to each input
  // Clicks, onClick, onSubmit, onChange
  fireEvent.change(speciesInput, { target: { value: 'Hippo' } });
  fireEvent.change(ageInput, { target: { value: '32' } });
  fireEvent.change(notesInput, {
    target: { value: 'Takes really large dumps' },
  });
  // ASSERT
  expect(speciesInput.value).toBe('Hippo');
  expect(ageInput.value).toBe('32');
  expect(notesInput.value).toBe('Takes really large dumps');
  // click on the button!
  fireEvent.click(getByText(/submit/i));
  // assert that the species is added to the list
  const animalText = getByTestId('Hippo');
  expect(animalText).toBeInTheDocument();
});