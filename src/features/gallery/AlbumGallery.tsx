import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { GalleryCard } from './GalleryCard'
import Masonry from '@mui/lab/Masonry'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
// import { TransitionMotion, spring } from 'react-motion'
import {
  loadGallery,
  selectAlbum,
  selectAlbumKeys,
  selectAlbumMore,
  selectAlbumStatus
} from './GallerySlice'
import { Outlet } from 'react-router-dom'

export function GalleryHome() {
  const [showLoading, setShowLoading] = useState(true)
  const dispatch = useAppDispatch()
  const albums = useAppSelector(selectAlbum)
  const albumKeys = useAppSelector(selectAlbumKeys)
  const albumStatus: 'idle' | 'loading' | 'failed' = useAppSelector(selectAlbumStatus)
  const albumMore = useAppSelector(selectAlbumMore)

  useEffect(() => {
    setShowLoading(true)
  }, [albumStatus])
  return (<>
    <Outlet />
    <Masonry columns={3}>
      {albumKeys.map(item => albums[item]?.owner && <GalleryCard key={item} id={item} data={albums[item]} />)}
    </Masonry>
    {albumStatus === 'loading' && showLoading && <Backdrop
      sx={{ backgroundColor: '#ffffffdd', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={albumStatus === 'loading'}
      onClick={() => { setShowLoading(false) }} > <CircularProgress />
    </Backdrop>
    }
    {albumMore && <Button disabled={albumStatus === 'loading'}
      variant="text" onClick={() => { dispatch(loadGallery({ offset: 11, limit: 10 })) }}>Load More</Button>}
  </>
  )
}