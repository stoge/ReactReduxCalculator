var math = require('mathjs');

const initialState = {
    display: '',
    expression: [],
    operatorFlag: false
}

let properExpression = (operator, state) => {
    return state.operatorFlag ? [...state.expression.slice(0, -1), operator] : [...state.expression, String(state.display), operator]
}

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_NUMBER':
            let newNumber = state.operatorFlag ? action.number : (state.expression.length === 0 ? action.number : state.display + action.number);
            return {...state, display: newNumber, operatorFlag: false }

        case 'PLUS':
            return {
                ...state,
                operatorFlag: true,
                expression: properExpression('+', state)
            }
        case 'MINUS':
            return {
                ...state,
                operatorFlag: true,
                expression: properExpression('-', state)
            }
        case 'MULTIPLY':
            return {
                ...state,
                operatorFlag: true,
                expression: properExpression('*', state)
            }
        case 'DIVIDE':
            return {
                ...state,
                operatorFlag: true,
                expression: properExpression('/', state)
            }

        case 'CLEAR':
            return initialState;

        case 'RESULT':
            let newExpression = [...state.expression, state.display]
            let result = String(math.eval(newExpression.join('')));
            return {
                ...state,
                display: result,
                expression: [],
            }

        default:
            return state;
    }
}