import React, {Component} from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({ ...initialState });
    }

    addDigit(n) {
        if (n === "." && this.state.displayValue.includes(".")) {
            return
        }
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay === true;

        const currentValue = clearDisplay === true ? "" : this.state.displayValue;
        const newDisplayValue = currentValue + n;
        this.setState({displayValue: newDisplayValue, clearDisplay: false});

        if (n !== ".") {
            const i = this.state.current;
            const parseValue = parseFloat(newDisplayValue);
            const newValue = [ ...this.state.values ];

            newValue[i] = parseValue;
            this.setState({values: newValue});

            console.log(newValue)
        }
    }

    setOperation(mathOperation) {
        if (this.state.current === 0) {
            this.setState({ operation: mathOperation, current: 1, clearDisplay: true });
        } else {
            const isEqualsOperator = mathOperation === "=";
            const currentOperation = this.state.operation;
            const arrayValues = [...this.state.values];

            try {
                arrayValues[0] = eval(`${arrayValues[0]} ${currentOperation} ${arrayValues[1]}`);
            } catch (e) {
                arrayValues[0] = this.state.values
            }
            
            arrayValues[1] = 0;

            this.setState({
                displayValue: arrayValues[0],
                operation: isEqualsOperator ? null : mathOperation,
                current: isEqualsOperator ? 0 : 1,
                clearDisplay: !isEqualsOperator,
                value: arrayValues

            });
        }
    }


    render() {
        return (
            <div className="calculator">
                <Display value={ this.state.displayValue }/>
                <Button myLabel="AC" click={ this.clearMemory } triple/>
                <Button myLabel="/" click={ this.setOperation } operation />
                <Button myLabel="7" click={ this.addDigit }/>
                <Button myLabel="8" click={ this.addDigit }/>
                <Button myLabel="9" click={ this.addDigit }/>
                <Button myLabel="*" click={ this.setOperation } operation />
                <Button myLabel="4" click={ this.addDigit }/>
                <Button myLabel="5" click={ this.addDigit }/>
                <Button myLabel="6" click={ this.addDigit }/>
                <Button myLabel="-" click={ this.setOperation } operation />
                <Button myLabel="1" click={ this.addDigit }/>
                <Button myLabel="2" click={ this.addDigit }/>
                <Button myLabel="3" click={ this.addDigit }/>
                <Button myLabel="+" click={ this.setOperation } operation />
                <Button myLabel="0" click={ this.addDigit } double/>
                <Button myLabel="." click={ this.addDigit }/>
                <Button myLabel="=" click={ this.setOperation } operation />
            </div>
        )
    }
}

export default Calculator;