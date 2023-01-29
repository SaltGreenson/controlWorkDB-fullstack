import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto 5%;
  grid-template-rows: 80px auto 100px 350px;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-rows: 60px auto 100px auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 5% 90% 5%;
  }
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > h2 {
    white-space: nowrap;
  }

  & > h4 {
    max-width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const MenuContainer = styled.div`
  grid-column: 1;
  grid-row: 2 / span 3;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  z-index: 2;
  grid-column: 1 / span 3;
  grid-row: 1;
  position: sticky;
  top: 0;
`;

export const FooterContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 4;
`;
