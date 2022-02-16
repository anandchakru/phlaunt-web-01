import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Masonry from '@mui/lab/Masonry'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { TransitionMotion, spring } from 'react-motion'
import {
  Album,
  loadGallery,
  selectAlbum,
  selectAlbumMore,
  selectAlbumStatus
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