var Sendmessage = React.createClass({
	getDefaultProps: function(){
		return{
			message : 'ReactListener',
		};
		
	},
	onButtonSend: function(e){
		e.preventDefault();
		var message = this.refs.message.value;
		alert(message);
	},
	render: function(){
		return(
			<div>
				<h1>Welcome To the chat program</h1>
				<h3>Send a Message here</h3>
				<form onSubmit = {this.onButtonSend}>
					<input type="text" ref='message'/>
					<button>Send</button>
				</form>

			</div>

		);

	},

});
var message = "Listening to your Event"
ReactDOM.render(
	<Sendmessage message = {message}/>, document.getElementById('app')
);