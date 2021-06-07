import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

type DateInputProps = {
    label: string,
    value: string,
    fullWidth?: boolean,
    required?: boolean,
    deadline? : string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput: FC<DateInputProps> = (props) => {
    return (
        <TextField
            fullWidth={props.fullWidth}
            margin='dense'
            label={props.label}
            type="date"
            required={props.required}
            // defaultValue={}
            InputLabelProps={{
                shrink: true,
            }}
            value={props.deadline}
            onChange={props.onChange}
        />
    )
}

export default DateInput;