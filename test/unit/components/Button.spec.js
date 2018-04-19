// @flow
import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Button from '../../../src/components/button/Button.jsx';

declare var describe: Function;
declare var it: Function;

describe('The Button component', () => {
  it('should accept a className', () => {
    const props = {
      className: 'moon',
    };

    const button = shallow(<Button {...props} />);

    assert.equal(button.is('.moon'), true);
  });

  it('should set a value attribute', () => {
    const props = {
      value: 'moon',
    };

    const button = shallow(<Button {...props} />);

    assert.equal(button.find('[value="moon"]').length, 1);
  });

  it('should set the title text', () => {
    const props = {
      title: 'moon',
    };

    const button = shallow(<Button {...props} />);

    assert.equal(button.text(), 'moon');
  });

  it('should fire the onClick on click', () => {
    const props = {
      onButtonClick: sinon.spy(),
    };

    const button = shallow(<Button {...props} />);

    button.simulate('click');

    assert.equal(props.onButtonClick.callCount, 1);
  });

  it('shouldnt break if no onClick provided', () => {
    const button = shallow(<Button />);

    button.simulate('click');

    assert.ok(true);
  });

  it('should set the refs', () => {
    const button = mount(<Button />);

    const buttonInstance = button.instance();

    assert.equal(
      buttonInstance.button.toString(),
      '[object HTMLButtonElement]'
    );
  });
});
