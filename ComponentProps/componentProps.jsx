var Student = React.createClass({
	getDefaultProps: function(){
		return{
		firstName: "student firstName",
		lastName:"student lastName",
		gadeNumber: "below 12"
		};
	},
	render:function(){
		var firstName = this.props.firstName;
		var lastName = this.props.lastName;
		var gadeNumber = this.props.gadeNumber;
		return(
			<div>
				<h1>Welcome:{firstName} {lastName}</h1>
				<h3>Portal Grade: {gadeNumber}</h3>
			</div>

		);
	},

});
var firstName = 'Peter';
var lastName = 'Davis';
var gadeNumber= 12

ReactDOM.render(

 <Student firstName={firstName} lastName={lastName} gadeNumber = {gadeNumber}/>, document.getElementById('app')
)var Student = React.createClass({
	getDefaultProps: function(){
		return{
		firstName: "student firstName",
		lastName:"student lastName",
		gadeNumber: "below 12"
		};
	},
	render:function(){
		var firstName = this.props.firstName;
		var lastName = this.props.lastName;
		var gadeNumber = this.props.gadeNumber;
		return(
			<div>
				<h1>Welcome:{firstName} {lastName}</h1>
				<h3>Portal Grade: {gadeNumber}</h3>
			</div>

		);
	},

});
var firstName = 'Peter';
var lastName = 'Davis';
var gadeNumber= 12

ReactDOM.render(

 <Student firstName={firstName} lastName={lastName} gadeNumber = {gadeNumber}/>, document.getElementById('app')
)