import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-family: 'Lobster', cursive;
        font-size: 40px;
        color: #1da1f2;
        :hover {
            color: darkgrey;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a'>
            <h1>Madi Yerzhan</h1>
            <h2>{allPosts} записей, из низ понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;