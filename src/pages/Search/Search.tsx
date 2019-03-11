import { observer } from 'mobx-react';
import * as React from 'react';

import AppPage from '@components/structural/AppPage';

import './style.less';

export interface SearchProps {
	// Empty
}

interface State {
	loading: boolean;
}

@observer
class Search extends React.Component<SearchProps, State> {
	public state: State = {
		loading: true
	};

	public componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 500);
	}

	public render() {
		return (
			<AppPage
				useLoader={true}
				spinning={this.state.loading}
				antSpinner={true}
				className={'Search__Body'}
			>
				<section className="Search__Card">
					<section className="Content__Wrapper">
						<h1 className="placeholder">Search</h1>
					</section>
				</section>
			</AppPage>
		);
	}
}

export default Search;
