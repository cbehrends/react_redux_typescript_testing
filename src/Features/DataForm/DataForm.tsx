import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Input, TextField} from "@material-ui/core";

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default
        }
    })
);

const DataForm: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
        >
            <TextField
                value={'TestValue'}
                inputProps={{
                    'data-testid': 'valueInput'
                }}
            />
        </div>
    );
};

export default DataForm;
