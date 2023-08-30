import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className='loader-div'>
        <span className='loader'>
          <span></span>
          <span></span>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.loader-div {
	position: fixed;
	top: 0;
	left: 0;
	background-color: #333;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.loader {
	position: relative;
	width: 10vw;
	height: 5vw;
	padding: 1.5vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

.loader span {
	position: absolute;
	height: 0.8vw;
	width: 0.8vw;
	border-radius: 50%;
	background-color: #ff0;
}

.loader span:nth-child(1) {
	animation: loading-dotsA 0.5s infinite linear;
}

.loader span:nth-child(2) {
	animation: loading-dotsB 0.5s infinite linear;
}

@keyframes loading-dotsA {
	0% {
		transform: none;
	}
	25% {
		transform: translateX(2vw);
	}
	50% {
		transform: none;
	}
	75% {
		transform: translateY(2vw);
	}
	100% {
		transform: none;
	}
}

@keyframes loading-dotsB {
	0% {
		transform: none;
	}
	25% {
		transform: translateX(-2vw);
	}
	50% {
		transform: none;
	}
	75% {
		transform: translateY(-2vw);
	}
	100% {
		transform: none;
	}

`;

export default Loading;
