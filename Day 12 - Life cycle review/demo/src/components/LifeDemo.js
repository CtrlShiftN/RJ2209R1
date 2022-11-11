import { Component } from "react";

class LifeDemo extends Component {
    // First stage: Initialize
    constructor(props) {
        super(props);
        this.state = {
            time: '01/01/1970'
        };
    }
    // Second stage: Mounting components
    componentWillMount() {
        this.setState({ time: '04/04/1973' });
        console.log("Will mount");
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ time: '05/05/1975' });
            console.log("Did mount");
        }, "3000")

    }
    render() {
        return (
            <p>{this.state.time}</p>
        )
    }

}
export default LifeDemo;