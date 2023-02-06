import logo from '../logo.svg';

const style={
	verticalAlign:"middle"
}
function Header(props){
	return (<div>
		<h1>Built by <img width="50" height="50" src={logo} alt="Logo" style={style} /></h1> 
    </div>)
}

export default Header;