import PostForm from './Components/PostForm';
import React, {useState} from 'react';

function CreateBlog() {
	const [dataNotUploaded , setDataNotUploaded] = useState(true);
	function setdataUploadedFunction(value) {
		setDataNotUploaded(value);
	}
	return (
		<div>
			{dataNotUploaded && <h1>Creating Blog Post</h1>}
			<PostForm updateDataNotUploaded={setdataUploadedFunction}/>
		</div>
	);
}

export default CreateBlog;