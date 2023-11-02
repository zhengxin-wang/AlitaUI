import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { usePromptListQuery } from "../../api/prompts.js";
import Categories from "./Categories.jsx";
import TrendingAuthors from "./TrendingAuthors.jsx";

const SOURCE_PROJECT_ID = 9
const PromptList = () => {
    const {filteredList} = useSelector(state => state.prompts);
    const {isSuccess, isError, ...rest} = usePromptListQuery(SOURCE_PROJECT_ID);
    return (
        <Grid container style={{flexGrow: 1}}>
            <Grid item xs={9} style={{overflow: 'auto'}}>
                <pre>
                {JSON.stringify(filteredList, null, 2)}
                </pre>

                <pre>
                {JSON.stringify({isSuccess, isError, ...rest}, null, 2)}
                </pre>
            </Grid>

            <Grid item xs={3} style={{
                position: 'fixed',
                right: 0,
                height: '100vh',
            }}>
                <Categories/>
                <TrendingAuthors/>
            </Grid>
        </Grid>
    )
}

export default PromptList