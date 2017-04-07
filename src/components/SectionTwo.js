import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ShoeDesc from './ShoeDesc';

const textDescContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."


class SectionTwo extends React.Component {
	render() {
		return (
			<div className={css(styles.sectionTwoWrapper)}>
				<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>
				<ShoeDesc header="METUS PELLENTESQUE" content={textDescContent}/>
				<ShoeDesc header="BLANDIT TINCIDUNT METUS" content={textDescContent}/>
			</div>
		)
	}
}

const styles = StyleSheet.create({
	sectionTwoWrapper: {
		display: 'flex',
		backgroundColor: '#040404',
		padding: '100px 20px',
		justifyContent: 'space-around',
		alignItems: 'flex-end'
	}
})

export default SectionTwo;