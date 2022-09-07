export default function SubmitButton(props) {
	return (
		<div>
			<button onClick={()=> {
				props.clicked()
			}}>{props.buttonTitle}</button>
		</div>
	)
}