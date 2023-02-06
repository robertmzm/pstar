import logo from '../logo.svg';
const style={
    verticalAlign:"middle"
}
function Footer(props){
	return (<div>
      <h1>Built by <img width="50" height="50" src={logo} alt="Logo" style={style} /></h1>
    </div>)
}

export default Footer;