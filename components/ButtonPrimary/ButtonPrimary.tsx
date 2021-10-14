import styled from 'styled-components'

const ButtonPrimary = styled.a`
    padding: 0;
    background-color: rgb(0 189 106);
    outline: none;
    border: 0;
    border-radius: 56px;
    color: #fff;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    min-width: 190px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active { 
        background-color: rgb(0 189 106 / 80%)
    }
`;

export default ButtonPrimary