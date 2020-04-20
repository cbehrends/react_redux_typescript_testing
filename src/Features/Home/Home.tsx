import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import DataForm from "../DataForm/DataForm";

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
    const userName = useSelector((store: any) => store.Login.userName);

    return (
        <div
            className={classes.root}
        >
            <div>
                Home - {userName}
            </div>
            <DataForm/>
        </div>
    );
};

export default Home;
