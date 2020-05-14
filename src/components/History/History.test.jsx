import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History component', () => {
  it('renders History', () => {
    const wrapper = shallow(<History
      url="https://testurl.com" 
      method='GET'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
