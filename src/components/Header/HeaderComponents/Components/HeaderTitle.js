import '../Styles/HeaderTitle.css'

function HeaderTitle(props) {
    return (
        <div className='header-title-container'>
            <a href='/' className='header-title-link'>
                <h1 className='header-title'>{props.title}</h1>
            </a>
        </div>
    );
}

export default HeaderTitle;