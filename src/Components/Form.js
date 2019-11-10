import React, { Component } from "react"

export default class Form extends Component {
    constructor(props) {
        super()
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    state = {
        name: "",
        phone: ""
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.addContact({ ...this.state })

        this.setState({ name: "", phone: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="name"
                        id="name"
                        value={this.state.name}
                        placeholder="Enter a name"
                        onChange={this.onChange}
                        autoComplete={"off"}
                    ></input>
                    <br />
                    <input
                        name="phone"
                        id="phone"
                        value={this.state.phone}
                        placeholder="Enter a phone"
                        onChange={this.onChange}
                        autoComplete={"off"}
                    ></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
