import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	LoadingComponent
} from 'component/loading/Loading';

describe('<LoadingComponent />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<LoadingComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});