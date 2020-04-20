import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/";
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
    const isLoggedIn = useSelector<boolean>((store: any) => store.isLoggedIn);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(login("Clicky clicky"))
    };

    if(isLoggedIn) {
        return (
            <div>
                <Button
                    className={classes.root}
                    {...props}
                    onClick={handleClick}
                    data-testid={'logOutButton'}
                >
                    Logout
                </Button>
            </div>
        );
    }
    return (
        <div>
            <Button
                className={classes.root}
                {...props}
                onClick={handleClick}
                data-testid={'loginButton'}
            >
                Login
            </Button>
        </div>
    );
};

export default LoginButton;
