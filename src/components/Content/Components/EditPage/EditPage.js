import '../../Styles/EditPage.css';
import React, {useState, useEffect} from 'react';
import PostFeild from '../../../Shared/Components/PostFeild';
import BlogContentFeild from '../../../Shared/Components/BlogContent';
import SucessMessage from '../../../Shared/Components/SucessMessage';
import SubmitButton from '../../../Shared/Components/SubmitButton';

export default function EditPage (props) {
	let params = new URLSearchParams(window.location.search);
	let ID = params.getAll('id')[0];
	
	const [dataObj, setDataObj] = useState({
		"id": ID, 
		"title": '', 
		"author": '',
		"email": '',
		"imagePath" : '',
		"description" : '',
		"content" : '',
	})

	const [titleValue, setTitleValue] = useState("");
	
	const [dataUploadedSucessfully , setdataUploadedSucessfully] = useState(false);
	// Loads in th document data and displays them on the page
	useEffect(() => {
		fetch(`http://localhost:8000/posts/${ID}`)
			.then((response) => response.json())
			.then((data) => {
				setDataObj((currentVals) => 
					{
						return {
								...currentVals,
								"title": data.title,
								"author" : data.author,
								"email" : data.email,
								"imagePath" : data.imagePath,
								"description" : data.description,
								"content" : data.content
							}
					}
				)
				getTitle(data.title);
			});	
	}, []);

	function updatePostData(event) {
		setDataObj((currentVals) =>{
			return {
				...currentVals,
				[event.target.name]: event.target.value
			}
		})
	}

	// When called updates the document data
	function updateData () {
		const requestOptions = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataObj)
		};
		fetch(`http://localhost:8000/posts/${ID}`, requestOptions)
			.then(response => response.json())
			.then((data) => {
				setdataUploadedSucessfully(true);
			});
	}

	let getTitle = function (textValue) {
		setTitleValue(value => {
			return textValue;
		})
	}


	return(
		(dataUploadedSucessfully) ? 
			<SucessMessage message='Blog Sucessfully Updated' hrefLocal='/' navigationLinkMessage='Navigate back to the home page'/>
		 :
			<div className='edit-page-container'>
				<div className='edit-page'>
					<h2>{`Edit Blog : ${titleValue}`}</h2>
					<PostFeild type="name" fieldKey={'author'} title={'Author'} placeholder='Author' customClass='blog-author' passedDataToParent={updatePostData} textContent={dataObj.author}/>
					<PostFeild type="email" fieldKey={'email'} title={'Author Contact'} placeholder='Author Email' customClass='blog-email' passedDataToParent={updatePostData} textContent={dataObj.email}/>
					<PostFeild type="link" fieldKey={'imagePath'} title={'Image URL'} placeholder='Image Link' customClass='blog-image-link' passedDataToParent={updatePostData} textContent={dataObj.imagePath}/>
					<PostFeild type="text" fieldKey={'title'} title={'Title'} placeholder='Blog Title' customClass='blog-title' passedDataToParent={updatePostData} textContent={dataObj.title}/>
					<PostFeild type="text" fieldKey={'description'} title={'Description'} placeholder='Blog Description' customClass='blog-description' passedDataToParent={updatePostData} textContent={dataObj.description}/>
					<BlogContentFeild fieldKey={'content'} title={'Blog Content'} placeholder='Write blog here...' customClass='blog-content' passedDataToParent={updatePostData} textContent={dataObj.content}/>
					<SubmitButton clicked={updateData} buttonTitle='Update Blog'/>
				</div>
			</div>
	);
}