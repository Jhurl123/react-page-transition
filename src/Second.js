import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <Wrapper>
      <span>Second</span>
      <section>
        <p>
          Morbi sodales at enim sed porttitor.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(120vh);
  background-color: #fcb900;
  padding-top:200px;
  z-index: -1;

  span {
    color: #002b66;
    font-size: 40px;
  }

  section {
    color: #002b66;
  }
`;

export default Second;
