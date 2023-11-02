import { useTrendingAuthorsQuery } from "@/api/prompts";
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Label = styled('div')(({theme}) => ({
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '160%', 
  marginBottom: theme.spacing(2)
}));

const SOURCE_PROJECT_ID = 9;
const TrendingAuthors = () => {
  const {tagList} = useSelector(state => state.prompts);
  const trendingAuthors = tagList;
  const {isSuccess, isError} = useTrendingAuthorsQuery(SOURCE_PROJECT_ID);
  return (
    <div>
      <div>
        <Label>Trending Authors</Label>
      </div>
      {
        isSuccess ? 
        <div>
          {
          trendingAuthors.map(({id, tag}) => (
            <div key={id}>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 32, height: 32, margin: '0 8px 8px 0', display: 'inline-flex' }}
              >AB</Avatar>
              <span>
              {tag}
              </span>
            </div>
          ))
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