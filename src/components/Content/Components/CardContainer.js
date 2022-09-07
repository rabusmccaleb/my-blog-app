import '../Styles/CardContainer.css';
import React, {useState, useEffect} from 'react';
import Card from './Card'

function CardContainer() {
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch('http://localhost:8000/posts')
			.then((response) => response.json())
			.then((data) => {
				setBlogs((blogList)=> {
					return data;
				})
			});
	
	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);
	return(
		<div className='Card-Cotainer' >
				{
					blogs.map((blog) => {
						return <Card id={blog.id} title={blog.title} imagePath={blog.imagePath} description={blog.description} author={blog.author}/>;
					})
				}
		</div>
	);
}

export default CardContainer;