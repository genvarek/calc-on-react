import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Calculator from './App'

describe('Calculator ', () => {
    it('1 + 3', () => {
      const wrapper = mount(<Calculator />);
      console.log(wrapper.debug())
    });
});
