import { useEffect, useState } from "react";
import { Album } from "../../../../model";
import { CommonConstant, AlbumService } from "../../../../utility";

export const useAlbum = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [data, setData] = useState<Album[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await AlbumService.get(CommonConstant.defaultArtist);
                setData(response.results);
                setError(false);
            } catch (e) {
                setError(false);
            } finally {
                setLoading(false);
            }

        };
        fetchData();
    }, []);
    return [{ loading, isError, data }];
}