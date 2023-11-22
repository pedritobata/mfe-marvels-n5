import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 1em auto;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  .movie {
    &__poster {
      max-width: 200px;
      height: 100;
      object-fit: cover;
    }

    &__body {
    }

    &__title {
    }

    &__description {
    }
  }
`;
