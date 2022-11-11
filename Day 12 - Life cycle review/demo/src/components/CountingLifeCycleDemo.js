import { Component } from "react";

class Counting extends Component {
    // Stage 1: Initialize
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    // Stage 2: Mounting
    componentWillMount() {
        console.log("Will mount");
    }

    componentDidMount() {
        console.log("Did mount");
    }

    // Stage 3: Updating
    shouldComponentUpdate() {
        return this.state.number < 10;
    }
    componentWillUpdate() {
        console.log("Will update");
    }
    componentDidUpdate() {
        console.log("Did update");
    }

    // Stage 4: Unmounting
    componentWillUnmount() {
        console.log("Will unmount");
    }

    increase = () => {
        this.setState({ number: this.state.number + 1 });
    };
    decrease = () => {
        this.setState({ number: this.state.number - 1 });
    };

    render() {
        return (
            <div style={{ textAlign: "center", padding: 30 }}>
                <button onClick={this.decrease}>Decrease</button>
                <span style={{ padding: 10 }}>{this.state.number}</span>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
export default Counting;