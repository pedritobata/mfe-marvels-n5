import styled from "styled-components";

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;

  .card {
    &__image {
      display: block;
      max-width: 100%;
      flex: 2;
      object-fit: cover;
    }

    &__info {
      flex: 1;
      margin: 0 10px 10px 10px;
    }
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.3em;
  margin: 0 0 10px 0;
`;

export const StyledDescription = styled.p`
  font-size: 1mem;
  color: #6a6c6e;
  margin: 0;
`;
