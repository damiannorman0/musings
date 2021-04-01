import styled from 'styled-components/macro';
import {debounce} from 'debounce';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  color: #282c34;
  font-size: medium;
`;

const Filter = (props) => {
  const {
    filter,
    placeholder,
  } = props;

  const onChange = (e) => {
    const {
      target: {
        value = '',
      } = {}
    } = e;

    const debounced = debounce(filter, 200);
    debounced(value.toLowerCase());
  };



  return (
    <StyledContainer>
      <StyledInput
        type='text'
        placeholder={placeholder}
        onChange={onChange} />
    </StyledContainer>
  );
};

export default Filter;