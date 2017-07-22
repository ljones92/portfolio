import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from '../../app/components/Footer';

describe('Component: Footer', () => {
  const wrapper = shallow(<Footer />);
  it('Renders component', () => {
    expect(
      wrapper.length,
    ).to.equal(1);
  });

  it('Contains a particle canvas of height 100px', () => {
    expect(wrapper.find('ParticleCanvas').node.props.height).to.equal('100px');
  });
});
