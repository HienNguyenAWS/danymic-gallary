import React from "react";

const Card = ({images}) => {
	return (
	<>
		{images.map((image, index) => (
			<div 
				className="card"
				key={index}
				style={{ background:`url("${image.url}") no-repeat center/cover` }}
			>
			</div>
		))}
	</>
	)
}

export default Card;