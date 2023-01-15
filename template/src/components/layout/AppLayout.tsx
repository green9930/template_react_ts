import React from "react";
import styled from "styled-components";

interface IAppLayout extends React.HTMLAttributes<HTMLDivElement> {}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <StAppLayout>
      <nav>
        <h1>CRA TS TEMPLATE</h1>
      </nav>
      {children}
    </StAppLayout>
  );
};

export default AppLayout;

const StAppLayout = styled.div``;
