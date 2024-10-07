import React from 'react'
import { Box, Typography } from '@mui/material'
import footerIcon from '../../assets/footerIcon.svg'
import whatsIcon from '../../assets/whatsIcon.svg'
import emailIcon from '../../assets/emailIcon.svg'
import youtubeIcon from '../../assets/youtubeIcon.svg'
import linkedinIcon from '../../assets/linkedinIcon.svg'
import instagramIcon from '../../assets/instagramIcon.svg'

const Footer = () => {
  return (
    <Box sx={{ padding: '16px', backgroundColor: '#E40613' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '36px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={footerIcon} alt="footerIcon" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#E40613',
            width: '50%',
          }}
        >
          <Box>
            <img
              src={whatsIcon}
              alt="whatsIcon"
              style={{ width: '12px', height: '12px', marginRight: '6px' }}
            />
            <Typography
              variant="title"
              sx={{ fontSize: '10px', fontWeight: 'regular', color: 'white' }}
            >
              +34 601 73 66 13
            </Typography>
          </Box>
          <Box>
            <img
              src={emailIcon}
              alt="emailIcon"
              style={{ width: '12px', height: '12px', marginRight: '6px' }}
            />
            <Typography
              variant="title"
              sx={{ fontSize: '10px', fontWeight: 'regular', color: 'white' }}
            >
              infolaguindilla@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            backgroundColor: '#E40613',
            width: '50%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="title"
              sx={{
                alignContent: 'end',
                marginRight: '5px',
                fontSize: '10px',
                fontWeight: 'regular',
                color: 'white',
              }}
            >
              Siguenos en:
            </Typography>
            <Box>
              <a
                href="https://www.youtube.com/@LaGuindilla-sf4hj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubeIcon}
                  alt="youtubeIcon"
                  style={{ width: '24px', height: '24px', marginRight: '6px' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/la-guindilla-09034b282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="linkedinIcon"
                  style={{ width: '24px', height: '24px', marginRight: '6px' }}
                />
              </a>
              <a
                href="https://www.instagram.com/infolaguindilla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="instagramIcon"
                  style={{ width: '24px', height: '24px', marginRight: '6px' }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
