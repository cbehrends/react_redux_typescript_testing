import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import LoginButton from "../Login/LoginButton";
import {Grid, Typography} from "@material-ui/core";


interface Props  {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper
        },

    })
);

const Header: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            justify="space-between"
            spacing={0}
        >
            <Grid
                item
                xs={3}
            >
                <Typography>
                    Some Logo
                </Typography>
            </Grid>
            {/*<Grid*/}
            {/*    item*/}
            {/*    xs={1}*/}
            {/*>*/}
            {/*    <LoginButton*/}
            {/*        variant={'outlined'}*/}
            {/*    />*/}
            {/*</Grid>*/}
        </Grid>
    );
};

export default Header;
