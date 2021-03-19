import React, {Component} from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        console.log("Limpar...");
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={100}/>
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