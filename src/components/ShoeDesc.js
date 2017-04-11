import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class ShoeDesc extends React.Component {
	render() {
		return (
			<div className={css(styles.textWrapper)}>
				<div className={css(styles.textHeader)}>{this.props.header}</div>
				<div className={css(styles.textContent)}>{this.props.content}</div>
			</div>
		)
	}
}

const styles = StyleSheet.create({
	textWrapper: {
		width: '250px'
	},
	textHeader: {
		fontSize: '22px',
		color: '#fff'
	},
	textContent: {
		fontSize: '12px',
		color: '#fff',
		textAlign: 'left'
	}


})

export default ShoeDesc;