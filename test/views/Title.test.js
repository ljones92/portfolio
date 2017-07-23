import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Title from '../../app/views/Title';

describe('View: Title', () => {
  it('Renders component', () => {
    const wrapper = shallow(<Title />);
    expect(
      wrapper.length,
    ).to.equal(1);
  });

  it('Contains a particle canvas of height 600px if window width is less than 1200px', () => {
    global.window = { innerWidth: 900 };
    const wrapper = shallow(<Title />);
    expect(wrapper.find('ParticleCanvas').node.props.height).to.equal('600px');
  });

  it('Contains a particle canvas of height 800px if window width is greater than 1200px', () => {
    global.window = { innerWidth: 1300 };
    const wrapper = shallow(<Title />);
    expect(wrapper.find('ParticleCanvas').node.props.height).to.equal('800px');
  });
});
