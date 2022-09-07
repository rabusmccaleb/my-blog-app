import './ContentContainer.css';
import { Routes, Route } from "react-router-dom";
import CreateBlog from '../PostCreation/CreateBlog';
import CardContainer from './Components/CardContainer';
import EditPage from './Components/EditPage/EditPage';

function ContentContainer () {
    return(
        <div className='content-container'>
            <Routes>
                <Route path='/' element ={<CardContainer/>}/>
                <Route path='Create-Post' element={<CreateBlog/>}/>
                <Route path='Edit' element={<EditPage/>}/>
            </Routes>
        </div>
    );
}

export default ContentContainer;