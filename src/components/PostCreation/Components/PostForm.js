import '../Styles/PostForm.css'
import React, {useState, useEffect} from 'react';
import PostFeild from '../../Shared/Components/PostFeild';
import BlogContentFeild from '../../Shared/Components/BlogContent';
import SucessMessage from '../../Shared/Components/SucessMessage';
import SubmitButton from '../../Shared/Components/SubmitButton';

function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}

function PostForm(props) {
	const [dataUploadedSucessfully , setdataUploadedSucessfully] = useState(false);
	const [dataObj, setDataObj] = useState({
		"id": uuidv4(), 
		"title": '', 
		"author": '',
		"email": '',
		"imagePath" : '',
		"description" : '',
		"content" : '',
	})

	function updatePostData(event) {
		setDataObj((currentVals) =>{
			return {
				...currentVals,
				[event.target.name]: event.target.value
			}
		})
	}

	function postData () {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataObj)
		};
		fetch('http://localhost:8000/posts', requestOptions)
			.then(response => response.json())
			.then((data) =>{
				props.updateDataNotUploaded(false)
				setdataUploadedSucessfully(true);
			});
	}

	return(
	(dataUploadedSucessfully) ? 
		<SucessMessage message='Blog Sucessfully Added' hrefLocal='/' navigationLinkMessage='Navigate back to the home page'/>
	:
		<div className='post-form-container'>
			<div className='post-form'>
				<PostFeild type="name" title={'Author'} fieldKey={'author'} placeholder='Author' customClass='blog-author' passedDataToParent={updatePostData}/>
				<PostFeild type="email" title={'Author Contact'} fieldKey={'email'} placeholder='Author Email' customClass='blog-email' passedDataToParent={updatePostData}/>
				<PostFeild type="link" title={'Image URL'} fieldKey={'imagePath'} placeholder='Image Link' customClass='blog-image-link' passedDataToParent={updatePostData}/>
				<PostFeild type="text" title={'Title'} fieldKey={'title'} placeholder='Blog Title' customClass='blog-title' passedDataToParent={updatePostData}/>
				<PostFeild type="text" title={'Description'} fieldKey={'description'} placeholder='Blog Description' customClass='blog-description' passedDataToParent={updatePostData}/>
				<BlogContentFeild fieldKey={'content'} title={'Blog Content'} placeholder='Write blog here...' customClass='blog-content' passedDataToParent={updatePostData}/>
				<SubmitButton clicked={postData} buttonTitle='Add Blog'>Submit</SubmitButton>
			</div>
		</div>
	)
}

export default PostForm;