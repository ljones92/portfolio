import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: Footer', () => {
  const wrapper = shallow(<Footer />);
  it('Renders component', () => {
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
