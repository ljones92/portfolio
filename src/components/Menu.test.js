import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: Menu', () => {
  beforeEach(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });

  it('should add a "scroll" event listener', () => {
    const wrapper = shallow(<Menu />);
    expect(window.addEventListener).toHaveBeenCalledTimes(1);
    expect(window.addEventListener).toHaveBeenCalledWith('scroll', wrapper.instance().handleScroll);
  });

  it('should remove "scroll" event listener on unmount', () => {
    const wrapper = shallow(<Menu />);
    wrapper.instance().componentWillUnmount();
    expect(window.removeEventListener).toHaveBeenCalled();
  });

  it('should set scrolling to true if scrollTop is greater than 100', () => {
    const wrapper = mount(<Menu />);
    window.pageYOffset = 200;
    wrapper.instance().handleScroll();
    expect(wrapper.instance().state.scrolling).toBeTruthy();
  });

  it('should set scrollTop using document.documentElement.scrollTop if pageYOffset isn\'t set  ', () => {
    const wrapper = mount(<Menu />);
    window.pageYOffset = null;
    document.documentElement.scrollTop = 200;
    wrapper.instance().handleScroll();
    expect(wrapper.instance().state.scrolling).toBeTruthy();
  });

  it('should set scrolling to false if scrollTop is less than 100', () => {
    const wrapper = mount(<Menu />);
    window.pageYOffset = 80;
    wrapper.instance().handleScroll();
    expect(wrapper.instance().state.scrolling).not.toBeTruthy();
  });

  it('Renders component', () => {
    const wrapper = shallow(<Menu />);
    expect(
      wrapper.length,
    ).toBe(1);
  });
});
