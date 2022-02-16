import React, { useEffect } from 'react'
import {
  Image,
} from './GallerySlice'
import { useParams } from "react-router-dom"

interface AlbumImgCardProps {
  id?: string
  key?: string
  data?: Image
}

export function AlbumImgCard(prop: AlbumImgCardProps) {
  const { albumId, imgId } = useParams();
  useEffect(() => { }, []);
  return (
    <h1>Album Img Card - {albumId}.{imgId}</h1>
  )
}