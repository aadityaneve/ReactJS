import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comment: "",
            topic: "",
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value,
        });
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `${this.state.username} ${this.state.comment} ${this.state.topic}`
        );
    };

    render() {
        var { username, comment, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName: </label>
                    <input
                        type="text"
                        // value={this.state.username}
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea
                        type="text"
                        // value={this.state.comment}
                        value={comment}
                        onChange={this.handleCommentChange}
                    />
                </div>
                <div>
                    <select
                        // value={this.state.topic}
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}

export default Form;
