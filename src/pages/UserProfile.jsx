import {Container, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useUserDetailsQuery} from "../api/auth.js";

const UserProfile = () => {
    const {id, email, last_login, name} = useSelector(state => state.user)
    const {isSuccess, isError, ...rest} = useUserDetailsQuery()
    return (
        <Container>
            demo is <Link component={RouterLink} to={'/demo'}>here</Link> - outside main application + lazy loading
            <br/>
            prompts are <Link component={RouterLink} to={'/prompts'}>here</Link>
            <br/>
            this is user:
            <pre>

            {JSON.stringify({id, email, last_login, name}, null, 2)}
            </pre>
            <pre>

            {JSON.stringify({isSuccess, isError, ...rest}, null, 2)}
            </pre>
        </Container>
    )
}

export default UserProfile