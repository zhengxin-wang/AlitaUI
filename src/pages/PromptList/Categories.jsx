import { useTagListQuery } from '@/api/prompts';
import { actions as promptSliceActions } from '@/reducers/prompts';
import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Label = styled('div')(({theme}) => ({
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '160%', 
  marginBottom: theme.spacing(3)
}));

const SOURCE_PROJECT_ID = 9;
const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    const newTag = e.target.innerText;
    if (selectedTag === newTag) {
      setSelectedTag('');
      await dispatch(promptSliceActions.filterByTag())
      return;
    }
    setSelectedTag(newTag);
    await dispatch(promptSliceActions.filterByTag(newTag))
  }
  const [selectedTag, setSelectedTag] = useState('');
  const {tagList} = useSelector(state => state.prompts);
  const {isSuccess, isError} = useTagListQuery(SOURCE_PROJECT_ID);
  return (
    <div style={{ maxHeight: '392px '}}>
      <div>
        <Label>Categories</Label>
      </div>
      {
        isSuccess ? 
        <div>
          {
          tagList.map(({id, tag}) => (
            <Chip key={id} color={selectedTag === tag ? 'primary': 'default'}
              label={tag} 
              onClick={handleClick}
            /> 
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

export default Categories;