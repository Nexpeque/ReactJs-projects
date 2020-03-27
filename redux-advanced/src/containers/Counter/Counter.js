import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/counter';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.increment()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
            </div>
        );
    }

    increment () {
        setTimeout(() => {
            this.props.onIncrementCounter()
        }, 2000);
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAdd: (value) => dispatch(actionCreators.add(value)),
        onSubtract: (value) => dispatch(actionCreators.subtract(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);