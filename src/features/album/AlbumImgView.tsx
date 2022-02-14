import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
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
import { useParams } from "react-router-dom"

export function AlbumImgView() {
  const { albumId, imgId } = useParams();
  return (
    <h1>Album Img - {albumId}.{imgId}</h1>
  )
}