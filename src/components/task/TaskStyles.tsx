import styled from "styled-components";

interface IProps {
    completed: boolean
}


export const Container = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-items: space-between;;
    color: black;
    position: relative;
    margin-bottom: .5rem;
    box-shadow: 0 2px 4px 1px #c3b3c3;

    .delete {
        cursor: pointer
    }
`

export const Marker = styled.div<IProps>`
    position: relative;
    top: 1px;
    width: 15px;
    height: 15px;
    border: 1px solid green;
    border-radius: 50%;
    align-self: center;
    cursor: pointer;
    background: ${props => props.completed ? 'green' : 'transparent'};

    &:before {
        position: absolute;
        top: -1px;
        left: 3px;
        font-size: .7rem;
        content: '✔';
        color: white;
    }
`

export const TaskText = styled.span<IProps>`
    position: relative;
    width: 80%;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    word-break: break-word;
    color: ${props => props.completed ? 'lightgray' : 'black'};
    transition: all .1s ease-in-out

`