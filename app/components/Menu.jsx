import React, { Component } from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      this.setState({ scrolling: true });
    } else {
      this.setState({ scrolling: false });
    }
  }

  render() {
    return (
        <div className={this.state.scrolling ? 'main-menu main-menu__scrolling' : 'main-menu'}>
            <ul className='main-menu__list'>
                <li className='main-menu__list--item'><a href='#about'>About</a></li>
                <li className='main-menu__list--item'><a href='#projects'>Projects</a></li>
                <li className='main-menu__list--item'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    );
  }
}

export default Menu;
