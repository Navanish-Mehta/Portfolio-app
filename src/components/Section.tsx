import styled from 'styled-components';
import { ReactNode } from 'react';

const SectionWrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <SectionWrapper id={id}>
    {children}
  </SectionWrapper>
);

export default Section; 