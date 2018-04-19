// @flow
import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Input from '../../../src/components/input/Input.jsx';

declare var describe: Function;
declare var it: Function;

describe('The Input component', () => {
  it('should accept a className', () => {
    const props = {
      className: 'moon',
    };

    const input = shallow(<Input {...props} />);

    assert.equal(input.is('.moon'), true);
  });

  it('should fire the onChange on change', () => {
    const props = {
      onChange: sinon.spy(),
    };

    const input = shallow(<Input {...props} />);

    input.simulate('change');

    assert.equal(props.onChange.callCount, 1);
  });

  it('shouldnt break if no onChange provided', () => {
    const input = shallow(<Input />);

    input.simulate('change');

    assert.ok(true);
  });

  it('should set the refs', () => {
    const input = mount(<Input />);

    const inputInstance = input.instance();

    assert.equal(inputInstance.input.toString(), '[object HTMLInputElement]');
  });
});
