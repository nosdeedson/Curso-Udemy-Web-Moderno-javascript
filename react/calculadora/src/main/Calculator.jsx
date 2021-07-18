import React, {Component} from 'react';

import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue : '0',
    clearDisplay : false,
    operation : null,
    operador1 : 0,
    operador2 : 0
}

export default class Calculator extends Component{
    
    state = { ...initialState}

    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory(){
        this.setState({...initialState});
    }

    setOperation(operation){
        if ( this.state.operation == null){
            this.setState({operation, clearDisplay : true})
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            let operador1 = this.state.operador1
            let operador2 = this.state.operador2
            switch (currentOperation) {
                case '+':
                    operador1 = operador1 + operador2;
                    break;
                case '-':
                    operador1 = operador1 - operador2;
                    break;
                case '*':
                    operador1 = operador1 * operador2;
                    break;
                case '/':
                    operador1 = operador1 / operador2;
                    break;
                default:
                    break;
            }
            operador2 = 0;

            this.setState({
                displayValue : operador1,
                operation : equals ? null : operation,
                current : equals ? 0 : 1,
                clearDisplay : !equals,
                operador1,
                operador2
            })
        }
    }

    addDigit(n){
        if ( n === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue
        let displayValue = currentValue + n
        const operation = this.state.operation
        if ( displayValue === '0' && operation !== null && operation ==='/'){
            displayValue = 'Jamais dividir por zero'
            this.setState({displayValue, clearDisplay : true})
            return
        }
        this.setState({displayValue, clearDisplay : false})

        if ( n !== '.'){
            const newValue = parseFloat(displayValue)
            let operador1 = this.state.operador1
            let operador2 = this.state.operador2
           
            if ( operation == null){
                operador1 = newValue
            } else{
                operador2 = newValue
            }
            this.setState({operador1, operador2})
        }
    }

    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperation} operation ></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
            </div>
        )
    }
}