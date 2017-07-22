import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Menu from '../../app/components/Menu';

describe('Component: Menu', () => {
  let addEventListenerSpy;

  beforeEach(() => {
    addEventListenerSpy = sinon.spy(window, 'addEventListener');
  });

  afterEach(() => {
    window.addEventListener.restore();
  });

  it('should add a "scroll" event listener', () => {
    const wrapper = shallow(<Menu />);
    wrapper.instance().componentDidMount();
    expect(addEventListenerSpy.callCount).equal(1);
    expect(addEventListenerSpy.args[0][0]).equal('scroll');
    expect(addEventListenerSpy.args[0][1]).equal(wrapper.instance().handleScroll);
  });

  it('should remove "scroll" event listener on unmount', () => {
    const wrapper = shallow(<Menu />);
    wrapper.instance().componentWillUnmount();
    expect(addEventListenerSpy.callCount).equal(0);
  });

  it('should set scrolling to true if scrollTop is greater than 100', () => {
    const wrapper = mount(<Menu />);
    window.pageYOffset = 200;
    wrapper.instance().handleScroll();
    expect(wrapper.instance().state.scrolling).to.equal(true);
  });

  it('should set scrolling to false if scrollTop is less than 100', () => {
    const wrapper = mount(<Menu />);
    window.pageYOffset = 80;
    wrapper.instance().handleScroll();
    expect(wrapper.instance().state.scrolling).to.equal(false);
  });

  it('Renders component', () => {
    const wrapper = shallow(<Menu />);
    expect(
      wrapper.length,
    ).to.equal(1);
  });
});
