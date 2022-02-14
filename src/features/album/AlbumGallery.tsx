import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { AlbumCard } from './AlbumCard'
import Masonry from '@mui/lab/Masonry'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import { TransitionMotion, spring } from 'react-motion'
import {
  loadAlbum,
  selectAlbum,
  selectAlbumMore,
  selectAlbumStatus
} from './AlbumSlice'

export function AlbumGallery() {
  const [showLoading, setShowLoading] = useState(true)
  const dispatch = useAppDispatch()
  const album = useAppSelector(selectAlbum)
  const albumStatus: 'idle' | 'loading' | 'failed' = useAppSelector(selectAlbumStatus)
  const albumMore = useAppSelector(selectAlbumMore)

  useEffect(() => {
    setShowLoading(true)
  }, [albumStatus])
  return (<>
    <Masonry columns={3}>
      {album.map(item => <AlbumCard key={item.id} data={item} />)}
    </Masonry>
    {albumStatus === 'loading' && showLoading && <Backdrop
      sx={{ backgroundColor: '#ffffffdd', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={albumStatus === 'loading'}
      onClick={() => { setShowLoading(false) }} > <CircularProgress />
    </Backdrop>
    }
    {albumMore && <Button disabled={albumStatus === 'loading'}
      variant="text" onClick={() => { dispatch(loadAlbum({ offset: 11, limit: 10 })) }}>Load More</Button>}
  </>
  )
}