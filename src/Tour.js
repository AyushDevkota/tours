import React, { useState } from "react";

const Tour = ({ id, info, name, price, image, handleDelete }) => {
	const [showMore, setShowMore] = useState(false);
	return (
		<>
			<article className="single-tour">
				<img src={image} alt={name} />
				<footer>
					<div className="tour-info">
						<h4>{name}</h4>
						<h4 className="tour-price">{price}</h4>
					</div>
					<p>
						{showMore ? info : `${info.slice(0, 200)}...`}
						<button
							onClick={() => {
								setShowMore(!showMore);
							}}
						>
							{showMore ? "read less" : "show more"}
						</button>
					</p>
					<button
						className="delete-btn"
						onClick={() => {
							handleDelete(id);
						}}
					>
						not interested
					</button>
				</footer>
			</article>
		</>
	);
};

export default Tour;
