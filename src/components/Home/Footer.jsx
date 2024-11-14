import React from 'react'
import { Box, Typography } from '@mui/material'
import footerIcon from '../../assets/footerIcon.svg'
import whatsIcon from '../../assets/whatsIcon.svg'
import emailIcon from '../../assets/emailIcon.svg'
import youtubeIcon from '../../assets/youtubeIcon.svg'
import linkedinIcon from '../../assets/linkedinIcon.svg'
import instagramIcon from '../../assets/instagramIcon.svg'
import maps from '../../assets/maps.svg'

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: '#E40613',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '36px',
          boxSizing: 'border-box',
          maxHeight: '291px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '63px', lg: '94px' },
            height: { xs: '116px', lg: '174px' },
          }}
        >
          <img
            src={footerIcon}
            alt="footerIcon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
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
              sx={{
                fontSize: { xs: '10px', lg: '15px' },
                fontWeight: 'regular',
                color: 'white',
              }}
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
              sx={{
                fontSize: { xs: '10px', lg: '15px' },
                fontWeight: 'regular',
                color: 'white',
              }}
            >
              infolaguindilla@gmail.com
            </Typography>
          </Box>
          <Box>
            <img
              src={maps}
              alt="maps"
              style={{ width: '12px', height: '12px', marginRight: '6px' }}
            />
            <Typography
              variant="title"
              sx={{
                fontSize: { xs: '10px', lg: '15px' },
                fontWeight: 'regular',
                color: 'white',
              }}
            >
              Chancela 18, Negreira A Coruña,
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="title"
              sx={{
                fontSize: { xs: '10px', lg: '15px' },
                fontWeight: 'regular',
                color: 'white',
              }}
            >
              ES 15839
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
                fontSize: { xs: '10px', lg: '15px' },
                fontWeight: 'regular',
                color: 'white',
              }}
            >
              Siguenos en:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.youtube.com/@LaGuindilla-sf4hj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubeIcon}
                  alt="youtubeIcon"
                  style={{
                    width: { xs: '24px', lg: '30px' },
                    height: { xs: '24px', lg: '21px' },
                    marginRight: '6px',
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/la-guindilla-servicios-digitales-09034b282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="linkedinIcon"
                  style={{
                    width: { xs: '24px', lg: '30px' },
                    height: { xs: '24px', lg: '21px' },
                    marginRight: '6px',
                  }}
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
                  style={{
                    width: { xs: '24px', lg: '30px' },
                    height: { xs: '24px', lg: '21px' },
                    marginRight: '6px',
                  }}
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
