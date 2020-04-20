import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LoginButton from "../Login/LoginButton";
import {useSelector} from "react-redux";

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default
        }
    })
);

const Home: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const userName = useSelector((store: any) => store.userName);

    return (
        <div
            className={classes.root}
        >
            <div>
                Home - {userName}
            </div>

        </div>
    );
};

export default Home;
