import React from 'react';
//import style from './style.scss';
import './style.scss';



export const Button = ({children, onClick}) => {
	return(

		<button onClick={onClick} className='button'>{children}</button>
	)
}

