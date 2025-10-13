import React from 'react';

const Image = ( {
					demo,
					content,
					alt,
					className
				} ) => {
	if ( !content || !content.Image || !content.Image.link ) {
		return null; // Return null if there is no image content to render
	}

	const imageUrl = demo.SERVER_IMAGE + content.Image.link;

	return (
		<img src={ imageUrl } alt={ alt } className={ className }/>
	);
};

export default Image;
