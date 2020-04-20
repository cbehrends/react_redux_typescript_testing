import * as React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Button, Input, TextField} from "@material-ui/core";
import {useState} from "react";

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default
        },
        saveButton: {
            // color: theme.saveButton.color
        }
    })
);

const DataForm: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [testVal, setTestVal] = useState<string>('');

    return (
        <div
            className={classes.root}
        >
            <TextField
                value={testVal}
                inputProps={{
                    'data-testid': 'valueInput'
                }}
                onChange={(event => setTestVal(event.target.value))}
            />
            <Button
                className={classes.saveButton}
                onClick={() => setTestVal('Saved')}
                data-testid={'saveButton'}
            >
                Save
            </Button>
        </div>
    );
};

export default DataForm;
