export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY_VALUE = "ADD_MEMORY_VALUE";
export const ADD_MEMORY_RETURN_VALUE = "ADD_MEMORY_RETURN_VALUE";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({
        type:ADD_ONE
    });
};

export const applyNumber = (number) => {
    return({
        type:APPLY_NUMBER,
        payload:number
    });
};

export const changeOperation = (operator) => {
    return({
        type:CHANGE_OPERATION,
        payload:operator
    });
};

export const clearDisplay = (clear) => {
    return({
        type:CLEAR_DISPLAY,
        payload: clear
    });
};

export const addMemoryValue = (addMemory) => {
    return({
        type: ADD_MEMORY_VALUE,
        payload: addMemory
    });
};

export const addMemoryReturnValue = (addMR) => {
    return({
        type: ADD_MEMORY_RETURN_VALUE,
        payload: addMR
    });
};

export const memoryClear = (clearMemory) => {
    return({
        type: MEMORY_CLEAR,
        payload: clearMemory 
    });
};