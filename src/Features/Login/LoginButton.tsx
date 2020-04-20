import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/";
import {login, logOut} from "./store/loginActions";

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
    const isLoggedIn = useSelector<boolean>((store: any) => store.Login.isLoggedIn);

    const dispatch = useDispatch();

    const handleLoginClick = () => {
        dispatch(login("someone@someplace.com"))
    };

    const handleLogOutClick = () => {
        dispatch(logOut())
    };

    if(isLoggedIn) {
        return (
            <div>
                <Button
                    className={classes.root}
                    {...props}
                    onClick={handleLogOutClick}
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
                onClick={handleLoginClick}
                data-testid={'loginButton'}
            >
                Login
            </Button>
        </div>
    );
};

export default LoginButton;
