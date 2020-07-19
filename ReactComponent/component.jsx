var Employee = React.createClass({
	getDefaultProps: function(){
		return{
			name :'Person Biodata'
		};
	},
	render:function(){
		var name = this.props.name;
		return(
			<div>
				<div> Employee {name}</div>
				<p>Find {name} data</p>
			</div>

		);
	}


});

ReactDOM.render(
	<Employee name="Melvins"/>, document.getElementById('app')
);