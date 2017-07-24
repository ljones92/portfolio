import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Projects from '../../app/views/Projects';

describe('View: Projects', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Projects />);
    expect(
      wrapper.length,
    ).to.equal(1);
  });
});
