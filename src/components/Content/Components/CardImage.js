import '../Styles/CardImage.css';

export default function CardImage(props) {
	return(
		<div className='image-container'>
			<img src={props.imagePath} />
		</div>
	)
}