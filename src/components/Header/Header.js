import './Header.css';
import HeaderLogo from './HeaderComponents/Components/HeaderLogo';
import HeaderLinks from './HeaderComponents/Components/HeaderLinks';
import HeaderTitle from './HeaderComponents/Components/HeaderTitle';
import HeaderNav from './HeaderComponents/Components/HeaderNav';

function Header() {
	let slug = url => new URL(url).pathname.match(/[^\/]+/g);
	let pageUrl = window.location.href;
	return(
		<div className='header-container'>
			{(slug(pageUrl)) ? <HeaderLinks linkRef={"/"} linkTitle={"< Back"}/> : <></>}
			<HeaderLogo urlPath={"https://picsum.photos/100/100"}/>
			<HeaderTitle title={"Mini Blog App"}/>
			<HeaderNav/>
		</div>
	);
}

export default Header;