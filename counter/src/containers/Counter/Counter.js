import React, { Component } from 'react';
import * as actionTypes from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)} >{strResult.value}</li>

                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};
const mapDispatchtoProps = dispacth => {
    return {
        onIncrementCounter: () => dispacth({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispacth({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispacth({ type: actionTypes.ADD, value: 5 }),
        onSubtractCounter: () => dispacth({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispacth({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispacth({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);