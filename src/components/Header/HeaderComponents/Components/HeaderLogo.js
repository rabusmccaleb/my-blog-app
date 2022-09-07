import '../Styles/HeaderLogo.css'

function HeaderLogo(props) {
    return(
        <div className='header-logo-container'>
            <img src={props.urlPath} />
        </div>
    )
}

export default HeaderLogo;