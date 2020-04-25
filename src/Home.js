import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div className="title">Welcome to Page Transition App!</div>
      <section>
        <p>Click the links on header to change routes!</p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(120vh);
  background-color: #333;
  color: #fff;
  text-align: center;
  padding-top: 200px;


  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default Home;