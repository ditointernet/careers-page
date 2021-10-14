import { useState, MouseEvent } from 'react';
import styled from 'styled-components'

const BtnJobs: React.FC = (props) => {
    const [mouseHold, setMouseHold] = useState(false)

    const mouseDown = (event: MouseEvent<HTMLButtonElement>) => {
        setMouseHold(true)
        const btn = document.getElementById("btn-jobs")
        var x = event.nativeEvent.offsetX - 10;
        var y = event.nativeEvent.offsetY - 10;
        btn?.insertAdjacentHTML('beforeend', '<div class="circle grow" style="left:' + x + 'px;top:' + y + 'px;"></div>')
    }

    return (
        <Btn
            id="btn-jobs"
            onMouseDown={mouseDown}
            onMouseUp={() => setMouseHold(false)}
            className={`${mouseHold && "mouse-hold"}`}
        >
            <div id="circle" className="circle" />
            {props.children}
        </Btn>
    )
}

const Btn = styled.button`
    padding: 0;
    background-color: rgb(0 189 106);
    outline: none;
    border: 0;
    border-radius: 56px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    min-width: 190px;
    min-height: 48px;

    & .circle {
        height: 25px;
        width: 25px;
        background-color: rgba(255, 255, 255, .1);
        border-radius: 56px;
        position: absolute;
        left: 50%;
        top: 50%;
        pointer-events: none;
        transform: scale(0);
    }

    @keyframes grow {
        0% {
            background-color: rgba(255, 255, 255, .5');
            transform: scale(1); z-index: 2;
        }
        100% {
            background-color: rgba(255, 255, 255, .3);
            transform: scale(30); opacity: 0; z-index: -1;
        }
    }

    .grow {
        animation: grow 1s ease-out forwards;
    }

    @media only screen and (min-width: 1366px) {
        margin: 0 20px;
    }
`;

export default BtnJobs