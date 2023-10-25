import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import {usePromptListQuery} from "../api/prompts.js";


const SOURCE_PROJECT_ID = 9
const PromptList = () => {
    const {list} = useSelector(state => state.prompts)
    const {isSuccess, isError, ...rest} = usePromptListQuery(SOURCE_PROJECT_ID)
    return (
        <Container>
            <pre>

            {JSON.stringify(list, null, 2)}
            </pre>
            <pre>

            {JSON.stringify({isSuccess, isError, ...rest}, null, 2)}
            </pre>
        </Container>
    )
}

export default PromptList