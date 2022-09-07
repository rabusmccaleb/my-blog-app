import '../Styles/PostFeild.css';

function PostFeild(props) {
	return (
		<div className='post-feild-container'>
			<h5 htmlFor={props.customClass}>{props.title}</h5>
			<input type={props.type} name={props.fieldKey} placeholder={props.placeholder} className={`post-feild ${props.customClass}`} id={props.customClass} value={props.textContent} onChange={props.passedDataToParent}/>
		</div>
	)
}

export default PostFeild;