import styled from 'styled-components';
const MainGrid = styled.main`
    width: 100%;
    grid-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 618px; 
    padding: 60px 16px;
    .profileArea {
      display: none;
      @media(min-width: 860px) {
        display: block;
      }
    }
    @media(min-width: 720px) {
        max-width: 860px;
        display: grid;
        grid-template-areas: 
          "welcomeArea profileRelationsArea";
        grid-template-columns: 1fr 312px;
    }
    @media(min-width: 860px) {
        max-width: 1110px;
        display: grid;
        grid-template-areas: 
          "profileArea welcomeArea profileRelationsArea";
        grid-template-columns: 170px 1fr 312px;
    }
`;
export default MainGrid;