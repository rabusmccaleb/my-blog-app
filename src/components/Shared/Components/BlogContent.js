import '../Styles/BlogContent.css';

function BlogContentFeild(props) {
	return (
		<div className='blog-content-feild-container'>
			<h5 htmlFor={props.customClass}>{props.title}</h5>
			<textarea placeholder={props.placeholder} className={`blog-content-feild ${props.customClass}`} id={props.customClass} name={props.fieldKey} value={props.textContent} onChange={props.passedDataToParent}/>
		</div>
	);
}

export default BlogContentFeild;