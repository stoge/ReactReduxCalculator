export const onNumClick = (number) => ({
    type: 'INPUT_NUMBER',
    number,
});

export const onPlusClick = () => ({
    type: 'PLUS'
});

export const onMinusClick = () => ({
    type: 'MINUS'
});

export const onMultiplyClick = () => ({
    type: 'MULTIPLY'
})

export const onDivideClick = () => ({
    type: 'DIVIDE'
})

export const onClearClick = () => ({
    type: 'CLEAR',
});

export const onResultClick = () => ({
    type: 'RESULT'
});