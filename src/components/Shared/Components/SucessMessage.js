export default function SucessMessage(props) {
	return(
		<div className='sucessMessageContainer'>
			<h3 className='sucessMessage'>{props.message}</h3>
			<a href={props.hrefLocal} className='sucessMessageLink'>{props.navigationLinkMessage}</a>
		</div>
	)
}