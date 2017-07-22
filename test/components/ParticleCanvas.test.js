import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ParticleCanvas from '../../app/components/ParticleCanvas';

describe('Component: ParticleCanvas', () => {
  const wrapper = shallow(<ParticleCanvas height='100px' />);
  it('Renders component', () => {
    expect(
      wrapper.length,
    ).to.equal(1);
  });

  it('Has a height of 100px', () => {
    expect(wrapper.node.props.height).to.equal('100px');
  });
});
