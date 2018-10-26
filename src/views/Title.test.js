import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';

Enzyme.configure({ adapter: new Adapter() });

describe('View: Title', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Title />);
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
