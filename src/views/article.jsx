var React = require("react");

export class Article extends React.Component{
	render(){
		return(
			<div>
				{this.props.title}
			</div>
		);
	}
}

module.exports = Article;