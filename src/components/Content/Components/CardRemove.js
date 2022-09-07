export default function CardRemove(props) {
	return (
		<div>
			<button onClick={() => {
				props.click();
			}}>{props.title}</button>
		</div>
	)
}