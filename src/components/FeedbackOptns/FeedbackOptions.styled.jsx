import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;

  padding: 30px;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  border-radius: 0.375em;
  padding: 0.5em 1em;
  font-size: 2em;
  font-family: Pacifico, sans-serif;
  background-image: linear-gradient(to bottom, #fff 55%, #ddd 55%),
    url('https://assets.codepen.io/4175254/leather.png');
  background-size: auto, auto 300%;
  -webkit-background-clip: text, border-box;
  background-clip: text, border-box;
  color: transparent;
  text-shadow: 0.0625em 0.0625em 0.125em rgb(0 0 0 / 0.12);
  caret-color: #fff;
  &:before,
  &:after {
    --spacing: 0.125em;
    content: '';
    position: absolute;
    top: var(--spacing);
    left: var(--spacing);
    border-radius: 0.25em;
    width: calc(100% - var(--spacing) * 2 - 0.125em);
    height: calc(100% - var(--spacing) * 2 - 0.125em);
  }

  &:before {
    border: 0.0625em solid rgb(0 0 0 / 0.2);
  }

  &:after {
    border: 0.0625em dashed #e4b98f;
    box-shadow: inset 0 0 0.0625em rgba(#000, 0.6),
      inset 0 0 0.0625em 0.125em rgba(#fff, 0.1), 0 0 0.0625em rgba(#000, 0.6);
  }
`;
