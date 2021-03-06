import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// import { useNavigate } from "react-router-dom"

interface GalleryCardProps {
  id?: string
  data?: any
  key?: string
}

export function GalleryCard(prop: GalleryCardProps) {
  // let navigate = useNavigate()
  const strToColor = (str: string) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var j = 0; j < 3; j++) {
      var value = (hash >> (j * 8)) & 0xFF;
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
