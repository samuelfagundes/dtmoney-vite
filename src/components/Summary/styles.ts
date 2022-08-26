import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.3rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }

  @media (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;

export const HighlightBackground = styled.div`
  background: var(--green) !important;
  color: #fff !important;
`;
