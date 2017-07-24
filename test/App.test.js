import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../app/App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('Renders component', () => {
    expect(
      wrapper.length,
    ).to.equal(1);
  });
  it('Contains 6 components', () => {
    expect(wrapper.children().nodes.length).to.equal(6);
  });
});
