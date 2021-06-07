import React, { FC } from 'react';
import { Button } from '@material-ui/core';

type PrimaryButtonProps = {
    className?: string,
    onClick?: () => void,
    label: string
}

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
    return (
        <Button className={props.className} variant="contained" color="primary" onClick={props.onClick}>
            {props.label}
        </Button>
    )
};

export default PrimaryButton;