import React, { FC } from 'react';
import { Button } from '@material-ui/core';

type GreyButtonProps = {
    className?: string,
    onClick?: () => void,
    label: string,
}

const GreyButton: FC<GreyButtonProps> = (props) => {
    return (
        <>
            <Button className={props.className} variant="contained" color="secondary" onClick={props.onClick}>
                {props.label}
            </Button>
        </>
    )
};

export default GreyButton;