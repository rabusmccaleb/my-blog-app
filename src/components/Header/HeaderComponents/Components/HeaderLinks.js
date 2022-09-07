import '../Styles/HeaderLinks.css';

function HeaderLinks(props){
    return(
        <div className='header-links-container'>
            <a href={props.linkRef} className='header-links-a'>
                <h3 className='header-links-h3'>{props.linkTitle}</h3>
            </a>
        </div>
    );
}

export default HeaderLinks;