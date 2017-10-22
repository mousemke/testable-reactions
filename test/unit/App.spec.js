/* globals describe, it */
import assert from 'assert';
import React from 'react';
import App from '../../src/components/App.jsx';
import { MemoryRouter } from 'react-router-dom';

import { shallow } from 'enzyme';

describe('The App component', () => {
  it('should show the initial div', () => {
    const app = shallow(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    assert.equal(app.find(App).length, 1);
    assert.equal(app.text(), 'This app seems to be working!');
  });
});
