import { useState } from "react";

export const useTextInput = ({validations = [], defaultValue = ''}) => {
    const [value, setValue] = useState(defaultValue)
    const validatorResults = validations.map((validator) => validator(value));
    const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
    const errors = failedValidators.map((validationObj) => validationObj.msg);
    
    const eventHandler = (e) => {
        setValue(e.target.value)
    }

    return [
        value,
        eventHandler,
        errors
    ]
};
