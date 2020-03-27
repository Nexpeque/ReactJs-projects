import React, { Component } from 'react'
import { connect } from 'react-redux';

class CounterList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.counterList.map((value, index) => {
                        return (
                            <p key={index}>Counter value #{index} {value}</p>
                        );
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counterList: state.saveCounterReducer.counterList
    }
}

export default connect(mapStateToProps)(CounterList);