import React from 'react';
import { useAlbum } from './hook';
import { AlbumList } from '../../components';
import styled from 'styled-components';

const AlbumContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #1f1f1f;
    padding: 1em 2em;
`;

const HeaderRow = styled.div`
    margin: 1em 0;
    color: white;
`;

export const AlbumPage: React.FC = () => {

    const [{ loading, isError, data }] = useAlbum();

    return (
        <AlbumContainer>
            <HeaderRow>
                <h2>Album List</h2>
            </HeaderRow>
            <AlbumList isError={isError} loading={loading} data={data} />
        </AlbumContainer>
    );
}
