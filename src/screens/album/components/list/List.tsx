import React from 'react';
import { Dimmer, Loader, Card } from 'semantic-ui-react'
import { Album } from '../../../../model';
import { AlbumDetails } from '../details';

type Props = {
    loading: boolean;
    isError: boolean;
    data: Album[];
}

export const AlbumList: React.FC<Props> = (props: Props) => (
    props.loading ? (<Dimmer active>
        <Loader />
    </Dimmer>
    ) : (
            <Card.Group>
                {props.data.map((album: Album, index: number) => (
                    <AlbumDetails album={album} key={index} />
                ))}
            </Card.Group>
        )
);