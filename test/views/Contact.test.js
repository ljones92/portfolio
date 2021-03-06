import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Contact from '../../app/views/Contact';

describe('View: Contact', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Contact />);
    expect(
      wrapper.length,
    ).to.equal(1);
  });
});
