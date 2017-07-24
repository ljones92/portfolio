import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from '../../app/views/About';

describe('View: About', () => {
  it('Renders component', () => {
    const wrapper = shallow(<About />);
    expect(
      wrapper.length,
    ).to.equal(1);
  });
});
