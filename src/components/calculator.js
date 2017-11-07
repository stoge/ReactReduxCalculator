import React from 'react';

export class Calculator extends React.Component {
    constructor(props){
        super(props);

        this.submitPlus = this.submitPlus.bind(this);
        this.submitMinus = this.submitMinus.bind(this);
        this.submitMultiply = this.submitMultiply.bind(this);
        this.submitDivide = this.submitDivide.bind(this);

        this.submitNumber = this.submitNumber.bind(this);

        this.doClear = this.doClear.bind(this);
        this.doResult = this.doResult.bind(this);
    }

    submitPlus(e) {
        this.props.onPlusClick();
    }

    submitMinus(e) {
        this.props.onMinusClick();
    }

    submitMultiply(e) {
        this.props.onMultiplyClick();
    }

    submitDivide(e) {
        this.props.onDivideClick();
    }

    submitNumber(e) {
        let number = e.target.innerText;
        this.props.onNumClick(number);
    }

    doClear(e){
        this.props.onClearClick();
    }

    doResult(e){
        this.props.onResultClick();
    }
    render() {
        return (
            <div id="calculator" >
                <div className="top" >
                    <span className="clear" onClick={this.doClear}> C </span>
                    <div className="screen" >{this.props.display}</div>
                </div>

                <div className="keys" >

                    <span onClick={this.submitNumber}> 7 </span>
                    <span onClick={this.submitNumber}> 8 </span>
                    <span onClick={this.submitNumber}> 9 </span>
                    <span className="operator" onClick={this.submitPlus}> + </span>
                    <span onClick={this.submitNumber}> 4 </span>
                    <span onClick={this.submitNumber}> 5 </span>
                    <span onClick={this.submitNumber}> 6 </span>
                    <span className="operator" onClick={this.submitMinus}> - </span>
                    <span onClick={this.submitNumber}> 1 </span>
                    <span onClick={this.submitNumber}> 2 </span>
                    <span onClick={this.submitNumber}> 3 </span> 
                    <span className="operator" onClick={this.submitDivide}> ÷ </span>
                    <span onClick={this.submitNumber}> 0 </span> 
                    <span onClick={this.submitNumber}> . </span>
                    <span className="eval" onClick={this.doResult}>= </span>
                    <span className="operator" onClick={this.submitMultiply}> x </span>
                    </div> 
            </div>
        );
    }
}