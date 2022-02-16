import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link, Outlet, useNavigate } from "react-router-dom"

interface GalleryCardProps {
  id?: string
  data?: any
  key?: string
}

export function GalleryCard(prop: GalleryCardProps) {
  let navigate = useNavigate()
  const strToColor = (str: string) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  return (
    <Card sx={{ maxWidth: 345 }} raised={true}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: strToColor(prop.data.owner) }} aria-label="recipe">
            {prop.data.owner[0]}
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={prop.data.title}
        subheader={prop.data.created}
      />
      <CardMedia
        component="img"
        image={prop.data.thumbnail}
        alt={prop.data.title}
        sx={{ objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => {
          // TODO: fix returning back to GalleryHome with the same view and then enable this          
          // navigate(`/gallery/album/${prop.id}`, { replace: false })
        }}
      />
      {prop.data.description && <CardContent>
        <Typography variant="body2" color="text.secondary">
          {prop.data.description}
        </Typography>
      </CardContent>}
    </Card>)
}
