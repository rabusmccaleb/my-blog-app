import logo from './logo.svg';
import Header from './components/Header/Header'
import ContentContainer from './components/Content/ContentContainer';
import CreateBlog from './components/PostCreation/CreateBlog';
function App() {
	return (
		<div className="App">
				<Header/>
				<ContentContainer/>
		</div>
	);
}

export default App;
