import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {useState} from "react";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {login} from "./store/loginActions";

type Props = {
    variant?: 'contained' | 'outlined' | 'text';
    style?: any;
    appState?: AppState;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default
        }
    })
);

const LoginButton: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const greetingLocal = useSelector((store: any) => store.userName);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(login("Clicky clicky"))
    };


    return (
        <div>
            <Button
                className={classes.root}
                {...props}
                onClick={handleClick}
            >
                Login
            </Button>
        </div>
    );
};

export default LoginButton;
