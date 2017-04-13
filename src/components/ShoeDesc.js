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
		width: '300px',
		fontFamily: 'Source Sans Pro'
	},
	textHeader: {
		fontSize: '28px',
		color: '#fff',
		width: '240px'
	},
	textContent: {
		fontSize: '11px',
		color: '#bbb',
		textAlign: 'left',
		lineHeight: '24px'
	}


})

export default ShoeDesc;