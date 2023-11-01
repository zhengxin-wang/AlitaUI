import {createTheme} from "@mui/material";
import {blueGrey, green, yellow} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#6ae8fa',
        },
        secondary: {
          main: '#262b34',
        },
        background: {
          default: '#0f131d',
        },
        text: {
            primary: '#ffffff',
          },
      },
      components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    background: {
                        default: '#0f131d',
                    },
                    color: '#ffffff',
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    margin: '0 8px 8px 0',
                    padding: '8px 20px',
                    borderRadius: '10px',
                },
                label: {
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '16px',
                    opacity: '0.8',
                }
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    background: '#0f131d',
                    color: '#ffffff',
                },
            },
        },
      },
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