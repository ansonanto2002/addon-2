import { CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card1 = () => {
  return (
    <div>
      <CardMedia component="img" height="196" image='photo-1598543821338-3b6306e0dcc3.img'></CardMedia>
      <CardContent>
        <Typography variant="body2"color="text.secondry">The GT-R series model was introduced in 2007 at the 
        Tokyo Motor Show and it started selling in Japan on 6 December 2007. The official launch in the US 
        came 7 months later, on 7 July 2008. Europe was the third consumer market where sales began in March
         2009. The big differences in the launch timing were due to the need to build special GT-R service 
         centres for the car repairs. The engine is located in the front, double-clutch transmission at the 
         rear, both units being hand-assembled. For this reason, the production is limited to about 1,000 
         vehicles per month.</Typography>
      </CardContent>
    </div>
  )
}

export default Card1
