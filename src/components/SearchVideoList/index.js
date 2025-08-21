import styles from './SearchVideoList.module.css'
import VideoList from '../../components/VideoList'
import { useEffect, useState } from 'react'
import Loader from '../Loader';


function filterVideos(videos, searchText){
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState('');
    const foundVideos = filterVideos(videos, searchText)
    const  [loanding, setLoading] = useState(true)

    useEffect(( )=> {
        setTimeout(() => setLoading(false), 2000)
    })

    return (
        <section className={styles.container}>
            <input 
                type='search'
                placeholder='Pesquisar...'
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />

            { loanding ? <Loader/> : 
                <VideoList 
                    videos={foundVideos}
                    emptyHeading={`Sem videos sobre ${searchText}`}
                />
            }

        </section>
    )
}

export default SearchVideoList