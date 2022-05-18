import styled from "styled-components";

export const CustomForm = styled.form`
  width: 96%;
  padding: 2%;

  user-select: none;
`;

export const ButtonContainer = styled.div`
  button {
    margin-right: 1%;
  }
`;

export const DragContainer = styled.div`
  margin-top: 1%;
  .flex {
    margin-bottom: 1%;
    padding: 0.5%;
    display: flex;
    justify-content: flex-start;
    border: 1px solid black;

    input[type="text"] {
      margin-right: 2%;
    }
  }

  span {
    margin-right: 1%;
  }

  label {
    cursor: pointer;
  }

  .content {
    width: 5%;
  }

  .id {
    width: 2%;
  }

  .input {
    border: none;
    cursor: default;
    user-select: none;

    :focus {
      outline: none;
    }
  }

  .remove {
    margin-left: 2%;
    color: red;

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const ScriptModal = styled.div`
  display: ${(props) => (props.modalOn ? "flex" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);

  z-index: 3;

  input[type="text"] {
    width: 100%;
    border-bottom: 1px solid #fff;
    background: none;
    color: #fff;
    font-size: 2vw;
    font-weight: 400;
  }

  textarea {
    margin-top: 1%;
    margin-bottom: 0;
    width: 100%;
    height: 40vh;
    border: 1px solid #fff;
    overflow-y: auto;
    background: none;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 400;

    ::-webkit-scrollbar-thumb {
      background: white;
    }
  }

  button {
    margin-top: 2%;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 400;
  }

  .exit {
    position: absolute;
    top: 2%;
    right: 2%;
    color: white;
    cursor: pointer;

    :hover {
      color: #88beff;
    }
  }

  .text_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin: 0 auto;
    width: 70%;
  }
`;
