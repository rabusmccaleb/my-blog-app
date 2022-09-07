import '../Styles/Card.css';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardAuthor from './CardAuthor';
import CardDescription from './CardDescription';
import CardRemove from './CardRemove';
import CardEdit from './CardEdit';

function Card(props) {
	let id = props.id;
	function deleteCardandData() {
		fetch(`http://localhost:8000/posts/${id}`, { method: 'DELETE' })
			.then((response) => {
				window.location.reload()
			})
	}

	return(
		<div className='card' data-id-val={`${props.id}`}>
			<div className='card-content'>
				<CardImage imagePath={props.imagePath}/>
				<div className='card-info'>
					<CardTitle title={props.title} />
					<CardAuthor author={props.author} />
					<CardDescription  description={props.description} />
					<CardRemove click={deleteCardandData} title='Remove Blog'/>
					<CardEdit navLink={`/Edit?id=${id}`} buttonTitle='Edit'/>
				</div>
			</div>
		</div>
	)
}

export default Card;