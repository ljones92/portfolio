import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ParticleCanvas from './ParticleCanvas';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: ParticleCanvas', () => {
  const wrapper = shallow(<ParticleCanvas height='100px' />);
  it('Renders component', () => {
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
