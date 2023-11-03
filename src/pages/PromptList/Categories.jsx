import { useTagListQuery } from '@/api/prompts';
import StyledLabel from "@/components/StyledLabel";
import { actions as promptSliceActions } from '@/reducers/prompts';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Label = styled(StyledLabel)(({theme}) => ({
  marginBottom: theme.spacing(3)
}));

const SOURCE_PROJECT_ID = 9;
const Categories = () => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);
  const {tagList} = useSelector(state => state.prompts);
  const {isSuccess, isError} = useTagListQuery(SOURCE_PROJECT_ID);
  const handleClick = useCallback(async (e) => {
    const newTag = e.target.innerText;
    if (selectedTags.includes(newTag)) {
      setSelectedTags(selectedTags.filter(tag => tag !== newTag));
      await dispatch(promptSliceActions.filterByTag(selectedTags))
      return;
    }
    const tags = [...selectedTags, newTag];
    setSelectedTags(tags);
    await dispatch(promptSliceActions.filterByTag(tags))
  }, [dispatch, selectedTags]);
  return (
    <div style={{ maxHeight: '392px', marginBottom: '16px' }}>
      <div>
        <Label>Categories</Label>
      </div>
      {
        isSuccess ? 
        <div>
          {
          tagList.map(({id, tag}) => (
            <Chip key={id} 
              label={tag} 
              onClick={handleClick}
              variant={selectedTags.includes(tag) ? 'outlined': 'filled'}
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