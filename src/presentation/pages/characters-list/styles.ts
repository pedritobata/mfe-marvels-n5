import styled from "styled-components";

export const Wrapper = styled.section`
  .character-list {
    &__title {
      font-size: 2em;
      text-align: center;
      margin: 2em 0;
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      max-width: 800px;
      margin: 1em auto;
    }
  }
`;
