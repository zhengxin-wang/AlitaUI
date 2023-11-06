import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: '"Montserrat", Roboto, Arial, sans-serif',
    },
    palette: {
        mode: 'dark',
        primary: {
          main: '#6ae8fa',
        },
        secondary: {
          main: '#262b34',
        },
        background: {
          default: '#0E131D',
        },
        text: {
            primary: '#A9B7C1',
        },
      },
      components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    background: '#1a1f28',
                    color: '#A9B7C1',
                    display: 'flex',
                    padding: '8px',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '16px'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    background: '#1a1f28',
                    margin: '0 8px 8px 0',
                    padding: '8px 20px',
                    borderRadius: '10px',
                },
                outlined: {
                    border: '1px solid rgba(255, 255, 255, 0.40)',
                    background: '#0E131D',
                    backdropFilter: 'blur(6px)',
                    color: '#FFF',
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
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: '38px',
                    fontSize: '14px',
                    fontWeight: '500',
                    '& button': {
                        minHeight: '36px',
                        textTransform: 'capitalize',
                    },
                    '& button>svg': {
                        fontSize: '16px',
                    }
                },

            }
        }
    }
});

export default theme