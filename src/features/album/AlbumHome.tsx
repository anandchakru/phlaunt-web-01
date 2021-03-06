import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Masonry from '@mui/lab/Masonry'
import {
  Album,
  selectAlbum,
} from '../gallery/GallerySlice'
import { useParams } from "react-router-dom"
import { AlbumImgCard } from '../gallery/AlbumImgCard'

export function AlbumHome() {
  const [album, setAlbum] = useState<Album | undefined>(undefined)
  const [albumImgKeys, setAlbumImgKeys] = useState<string[]>([])
  const albums = useAppSelector(selectAlbum)
  const { albumId } = useParams()
  useEffect(() => {
    if (albumId) {
      setAlbum(albums[albumId])
      if (albums[albumId]) {
        setAlbumImgKeys(Object.keys(albums[albumId].images))
      }
    }
  }, [albumId, albums])
  return (
    albumImgKeys && <Masonry columns={3}>
      {albumImgKeys.map(item => album && album[item].images[item]?.url && <AlbumImgCard key={item} id={item} data={album.images[item]} />)}
    </Masonry>
  )
}