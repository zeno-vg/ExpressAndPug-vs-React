var React = require('react');

export class HelloWorld extends React.Component{
	render(){
		return(
			<div>
				<title>{this.props.title}</title>
				<div>{this.props.paragraph}</div>
			</div>
		);
	}
}
module.exports = HelloWorld;