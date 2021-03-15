import React from 'react';
import { Component } from 'react'

import { Loading } from '../loading/Loading';
import classNames from 'classnames';

export default class Button extends Component {
  render () {
		const {
			text,
			primary,
			link,
			width,
			onClick,
			type,
			isFetching,
			disabled,
			children,
			margin,
			defaultButton,
			outline,
			small,
			setRef
    } = this.props;
    
    const buttonStyles = classNames({
			button: true,
			'button--primary': primary && !disabled,
			'button--disabled': disabled,
			'button--link': link,
			'button--default': defaultButton && !disabled,
			outline,
			small
    });
    
    return(
			<button
				onClick={(event) => {
					event.stopPropagation();
					if (onClick) {
						onClick(event);
					}
				}}
				className={buttonStyles}
				style={{
					width,
					margin
				}}
				type={type}
				disabled={disabled}
				ref={setRef}
			>
				{
						isFetching && !disabled ? (
							<Loading
								type="spinner"
							/>
						) : text
				}
			</button>
		);
	}
}
