import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('App component', () => {
  it('renders Header and Resty', () => {
    const wrapper = shallow(
      <Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
