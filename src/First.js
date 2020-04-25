import React from "react";
import styled from "styled-components";

function First() {
  return (
    <Wrapper>
      <span>First</span>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(120vh);
  background-color: #002b66;
  padding-top:200px;
  z-index: -1;

  span {
    color: #fcb900;
    font-size: 40px;
  }

  section {
    color: #fcb900;
  }
`;

export default First;
