import { useTrendingAuthorsListQuery } from "@/api/mock";
import StyledLabel from "@/components/StyledLabel";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import Person from "@/components/Icons/Person";

const Label = styled(StyledLabel)(({theme}) => ({
  marginBottom: theme.spacing(2)
}));

const SOURCE_PROJECT_ID = 9;
const TrendingAuthors = () => {
  const {trendingAuthorsList} = useSelector(state => state.mock);
  const {isSuccess, isError} = useTrendingAuthorsListQuery(SOURCE_PROJECT_ID);
  return (
    <div>
      <div>
        <Label>Trending Authors</Label>
      </div>
      {
        isSuccess ? 
        <div>
          {
          trendingAuthorsList.map(({id, avatar, name, email}) => {
            const displayName = name || email || 'unknown';
            return (
              <div key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Avatar
                  alt={displayName}
                  sx={{
                    width: 32,
                    height: 32,
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  { avatar ? <img src={avatar} alt={displayName} /> : <Person fontSize={'16px'} /> }
                </Avatar>
                <Typography component="span" variant="caption">
                  {displayName}
                </Typography>
              </div>
            )
          })
        }
        </div> : null
      }
      {
        isError ? 
        <div>
          Load tags failed.
        </div> : null
      }
    </div>
  );
}

export default TrendingAuthors;