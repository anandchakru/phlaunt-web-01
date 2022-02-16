import React, { useEffect, useState } from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.scss'
import { GalleryHome } from './features/gallery/AlbumGallery'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { useAppSelector, useAppDispatch } from './app/hooks'
import {
  loadGallery,
  selectAlbum,
  selectAlbumMore,
  selectAlbumStatus
} from './features/gallery/GallerySlice'

import {
  useLocation,
} from "react-router-dom"


function App() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(loadGallery({ offset: 0, limit: 10 }))
  }, [location])
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 10 }}>
        <GalleryHome />
      </Box>
    </Container>
  )
}

export default App
