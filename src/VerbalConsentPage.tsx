import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00c853',
      light: '#69f0ae',
      dark: '#00701a',
    },
    secondary: {
      main: '#2979ff',
    },
    background: {
      default: '#0a0e1a',
      paper: '#111827',
    },
    text: {
      primary: '#e8eaf6',
      secondary: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
})

const disclosures = [
  'The service is named Ninniku and is operated by a single private individual.',
  'Messages are SMS text alerts for personal trading activity: position alerts, price action signals, entry/exit signals, and portfolio updates.',
  'Messages will be sent to the sole registered mobile number fewer than 10 times per day, during active market hours only.',
  'Message and data rates may apply depending on the recipient\'s carrier plan.',
  'The recipient may opt out at any time by replying STOP to any message.',
  'The recipient may reply HELP to any message to receive service contact information.',
  'No messages will be sent for marketing, promotional, or third-party purposes.',
]

export default function VerbalConsentPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar
        position="static"
        elevation={0}
        sx={{ background: 'rgba(10,14,26,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Toolbar>
          <Box
            component={Link}
            to="/ninniku"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              color: 'text.secondary',
              textDecoration: 'none',
              mr: 3,
              '&:hover': { color: 'text.primary' },
              transition: 'color 0.15s',
            }}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography variant="body2">Ninniku</Typography>
          </Box>
          <ArticleIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Verbal Consent Documentation
          </Typography>
          <Chip
            label="OptInType: VERBAL"
            size="small"
            sx={{ ml: 2, bgcolor: 'rgba(0,200,83,0.1)', color: 'primary.light', border: '1px solid rgba(0,200,83,0.25)', fontFamily: 'monospace', fontSize: '0.7rem' }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>

        {/* Intro */}
        <Box mb={5}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
            Twilio Toll-Free Verification
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 2, fontWeight: 700 }}>
            SMS Opt-In Consent Script
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            This document fulfills the <strong style={{ color: '#e8eaf6' }}>VERBAL</strong> opt-in
            requirement for Twilio toll-free number verification. It contains the complete verbal
            consent script used to obtain the registered recipient's explicit agreement to receive
            SMS notifications from the Ninniku service.
          </Typography>
        </Box>

        {/* Service identification */}
        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 2 }}>
            Service Identification
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.06)' }} />
          <Stack spacing={1.5} mt={2}>
            {[
              { label: 'Service name', value: 'Ninniku' },
              { label: 'Opt-in type', value: 'VERBAL' },
              { label: 'Recipient count', value: 'Single — the service operator' },
              { label: 'Message category', value: 'Personal trading notifications (non-commercial)' },
              { label: 'Sending number type', value: 'Toll-free (US)' },
              { label: 'Contact', value: 'poligun@gmail.com' },
            ].map(({ label, value }) => (
              <Stack key={label} direction="row" spacing={2}>
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 160, flexShrink: 0 }}>
                  {label}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>

        {/* Pre-script disclosures */}
        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 2 }}>
            Disclosures Made Prior to Consent
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.06)' }} />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
            Before consent was collected, the following terms were verbally communicated to the recipient:
          </Typography>
          <List dense disablePadding>
            {disclosures.map((item, i) => (
              <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}>
                  <CheckCircleOutlineIcon fontSize="small" sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  slotProps={{ primary: { variant: 'body2', color: 'text.secondary' } }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* The verbal script */}
        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(0,200,83,0.2)' }}
        >
          <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2 }}>
              Verbal Consent Script
            </Typography>
            <Chip label="READ ALOUD" size="small" sx={{ bgcolor: 'rgba(0,200,83,0.1)', color: 'primary.light', fontSize: '0.65rem' }} />
          </Stack>
          <Divider sx={{ mb: 3, borderColor: 'rgba(0,200,83,0.15)' }} />

          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: '#0d1117',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeft: '3px solid #00c853',
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6' }}>
              "You are being asked to consent to receive SMS text message notifications from{' '}
              <strong>Ninniku</strong>, a private self-hosted trading notification service.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6', mt: 2 }}>
              These messages will be sent to your registered mobile phone number and will include
              trading alerts such as position updates, price action signals, entry and exit signals,
              and scheduled portfolio summaries.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6', mt: 2 }}>
              You will receive <strong>fewer than 10 messages per day</strong>, sent only during
              active market hours. Message and data rates may apply.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6', mt: 2 }}>
              You may opt out at any time by replying{' '}
              <Box component="span" sx={{ fontFamily: 'monospace', color: '#69f0ae', fontWeight: 700 }}>STOP</Box>
              {' '}to any message, or by removing your phone number through the Ninniku
              configuration interface. Reply{' '}
              <Box component="span" sx={{ fontFamily: 'monospace', color: '#69f0ae', fontWeight: 700 }}>HELP</Box>
              {' '}at any time for service contact information.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6', mt: 2 }}>
              No marketing or promotional messages will ever be sent. Your phone number will not be
              shared with any third party.
            </Typography>
            <Divider sx={{ my: 2.5, borderColor: 'rgba(255,255,255,0.08)' }} />
            <Typography variant="body1" sx={{ lineHeight: 2, color: '#e8eaf6', fontStyle: 'italic' }}>
              "Do you consent to receive SMS notifications from Ninniku on this phone number?"
            </Typography>
          </Paper>
        </Paper>

        {/* Consent acknowledgement */}
        <Paper
          elevation={0}
          sx={{ p: 3, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 2 }}>
            Consent Acknowledgement
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.06)' }} />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 1.5 }}>
            The recipient responded <strong style={{ color: '#e8eaf6' }}>"Yes"</strong> to the above
            question, confirming verbal consent to receive SMS notifications from the Ninniku service.
            Consent was collected by the service operator prior to configuring the registered phone
            number in the Ninniku system.
          </Typography>
        </Paper>

        {/* Post-consent terms */}
        <Paper
          elevation={0}
          sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Typography variant="caption" color="text.secondary">
            Ninniku is a private, non-commercial, single-recipient SMS notification service. Messages
            are sent exclusively to the operator's own registered mobile number. No marketing, promotional,
            or third-party messages are sent. Standard carrier message and data rates may apply.
            Reply STOP to opt out. Reply HELP for assistance. Contact: poligun@gmail.com
          </Typography>
        </Paper>

      </Container>

      <Box
        component="footer"
        sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', py: 4, textAlign: 'center' }}
      >
        <Typography variant="body2" color="text.secondary">
          Ninniku &mdash; Verbal Consent Documentation &mdash; Twilio Toll-Free Verification
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
