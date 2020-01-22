import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';

const header = shallow(<Header />);

describe('<Header />', () => {
	it('should match snapshot', () => {
		expect(toJson(header)).toMatchSnapshot();
	});
});