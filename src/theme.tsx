import red from "@material-ui/core/colors/red";
import {createMuiTheme, ThemeOptions, Theme as AugmentedTheme,} from "@material-ui/core/styles";
import {green, grey, lightGreen} from "@material-ui/core/colors";

const defaultTheme = {

    palette: {
        type: 'dark'
    },
    saveButton: {
        color: green[200]
    },
    overrides: {
        MuiAppBar: {
            // root: {
            //     borderBottom: '1px solid ' + grey[300],
            // },
            // colorPrimary: {
            //     backgroundColor: '#424242'
            // }
        },
        MuiTableRow: {
            root: {
                outline: 0,
                '&$hover:hover': {
                    backgroundColor: grey[500]
                },
            },
        }
    }
} as ThemeOptions;

// Support or custom variables in Material-UI Theme
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        saveButton: {
            color: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        saveButton?: {
            color?: string;
        };
    }
}

// A custom theme for this app
const theme = createMuiTheme(defaultTheme);

export default theme;
