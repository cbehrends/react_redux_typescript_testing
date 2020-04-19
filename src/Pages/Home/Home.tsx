import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

    return (
        <div
            className={classes.root}
        >
            <div>
                Home
            </div>
        </div>
    );
};

export default Home;
