import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {gaInit} from './GA';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import {lazy, Suspense, useEffect} from "react";
import ReactGA from "react-ga4";
import Page404 from "./pages/Page404.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import {Box} from "@mui/material";
import PromptList from "./pages/PromptList/PromptList.jsx";


const Demo = lazy(() => import("./pages/Demo/Demo.jsx"));


gaInit()

const App = () => {
    const location = useLocation()
    useEffect(() => {
        ReactGA.isInitialized && ReactGA.send({hitType: 'pageview', page: location.pathname + location.search})
        console.log('Google analytics init:', ReactGA.isInitialized)
    }, [location])

    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <>
                        <NavBar/>
                        <Box sx={{width: '100%', overflowX: 'hidden'}}>
                            <Routes>
                                <Route index element={<Navigate to="/profile" replace/>}/>
                                <Route path="/profile" element={<UserProfile/>}/>
                                <Route path="/prompts" element={<PromptList/>}/>
                                <Route path="*" element={<Page404/>}/>
                            </Routes>
                        </Box>

                    </>
                }
            />
            <Route path="/demo" element={
                <Suspense fallback={<div>Loading Component</div>}>
                    <Demo/>
                </Suspense>
            }/>

            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}

export default App
