import styled from "styled-components";

const Search = styled.input`
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  min-width: 13rem;
`;

export default function SearchBar() {
  return <Search type='text' placeholder='Search'></Search>;
}
