import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: true,
        }
    }

    handleChange = () => {
        this.setState({
            banner: !this.state.banner
        })
        this.props.changeCount(this.props.value);
    }

    handleChange2 = () => {
        this.setState({
            banner: !this.state.banner
        })
    }

    render() {
        return this.state.banner ? (
            <div className="card">
                {this.props.value}
                <button onClick={this.handleChange} className="closeBtn">
                    X
                </button>
            </div>
        ) : (
            <div className="card_show">
                {
                    <button className="show_btn" onClick={this.handleChange2}>
                        Show
                    </button>
                }
            </div>
        );
    }
}

export default Card