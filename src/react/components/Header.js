import logo from '../logo.svg';

const style={
	verticalAlign:"middle"
}
function Header(props){
	return (<div>
		<h1><img width="50" height="50" src={logo} alt="Logo" style={style} /> Flying Utility</h1> 
    </div>)
}

export default Header;