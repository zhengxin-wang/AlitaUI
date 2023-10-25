import {createTheme} from "@mui/material";
import {blueGrey, green, yellow} from "@mui/material/colors";

const theme = createTheme({
    palette: {mode: "dark"}
    // palette: {
    //     primary: {
    //         main: '#000',
    //         contrastText: '#fff',
    //     },
    //     // divider: '#fff',
    //     secondary: {
    //         // main: '#ff9814',
    //         main: '#BD9A07',
    //         contrastText: '#fff',
    //     },
    // },
    // components: {
    //     // Name of the component
    //     MuiButton: {
    //         styleOverrides: {
    //             // Name of the slot
    //             root: {
    //                 // Some CSS
    //                 // fontSize: '3rem',
    //                 textTransform: "capitalize"
    //             },
    //         },
    //     },
    //     MuiTooltip: {
    //         styleOverrides: {
    //             tooltip: {
    //                 backgroundColor: '#000000'
    //             }
    //         }
    //     }
    // },
})

export default theme