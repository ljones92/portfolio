import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';

Enzyme.configure({ adapter: new Adapter() });

describe('View: Contact', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Contact />);
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
