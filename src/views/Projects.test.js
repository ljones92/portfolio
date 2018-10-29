import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from './Projects';

Enzyme.configure({ adapter: new Adapter() });

describe('View: Projects', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Projects />);
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
