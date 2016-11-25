import * as React from "react";

export default class App extends React.Component<any, any> {
	private state = {}
	componentDidMount(){
		setInterval(()=>{
			this.setState({
				counter: (this.state.counter || 0) - 1
			})
		}, 1000)
		
	}
    render() {
        return (
            <div>
                <h1>Hello world! {this.state.counter}</h1>
                <div>Welcome to hot-reloading React written in TypeScript!</div>
            </div>
        );
    }
}
