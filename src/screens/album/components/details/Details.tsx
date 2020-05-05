import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Album } from '../../../../model';
import styled from 'styled-components'
import { CommonUtility } from '../../../../utility';

type Props = {
    album: Album;
}

const ImageBox = styled(Image)`
    height : 300px;
    width : auto;
`;

export const AlbumDetails = (props: Props) => {
    const image = props.album.artworkUrl100.replace(/100/g, '300');

    return (
        <Card>
            <ImageBox src={image} />
            <Card.Content>
                <Card.Header>{props.album.collectionName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Released on {CommonUtility.getDateYear(props.album.releaseDate)}</span>
                </Card.Meta>
                <Card.Description>
                    {props.album.artistName}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <b>No of Tracks:</b> {props.album.trackCount}, <b>Genre:</b> {props.album.primaryGenreName}
            </Card.Content>
        </Card>
    );
};