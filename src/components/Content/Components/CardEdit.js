
export default function CardEdit(props) {
	return (
		<div>
			<button onClick={()=>
				{props.click()}
			}>
				<a href={props.navLink}>{props.buttonTitle}</a>
			</button>
		</div>
	)
}