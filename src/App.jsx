import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from "@mui/material";
import React, { Suspense, lazy, useEffect } from "react";
import ReactGA from "react-ga4";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { gaInit } from './GA';
import NavBar from "./components/NavBar.jsx";
import MyCollections from './pages/MyCollcetions/MyCollections';
import MyPrompts from './pages/MyPrompts/MyPrompts';
import Page404 from "./pages/Page404.jsx";
import PromptList from "./pages/PromptList/PromptList.jsx";
import UserProfile from "./pages/UserProfile.jsx";


const Demo = lazy(() => import("./pages/Demo/Demo.jsx"));


gaInit()

const App = () => {
    const location = useLocation()
    useEffect(() => {
        ReactGA.isInitialized && ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search })
        // eslint-disable-next-line no-console
        console.log('Google analytics init:', ReactGA.isInitialized)
    }, [location])

    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <>
                        <NavBar />
                        <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                            <Routes>
                                <Route index element={<Navigate to="/discover" replace />} />
                                <Route path="/profile" element={<UserProfile />} />
                                <Route path="/discover" element={<PromptList />} />
                                <Route path="/discover/:tab" element={<PromptList />} />
                                <Route path="/my-prompts" element={<MyPrompts />} />
                                <Route path="/my-collections" element={<MyCollections />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Box>

                    </>
                }
            />
            <Route path="/demo" element={
                <Suspense fallback={<div>Loading Component</div>}>
                    <Demo />
                </Suspense>
            } />

            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default App
