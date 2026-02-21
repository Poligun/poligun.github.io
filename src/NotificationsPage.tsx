import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
} from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SpeedIcon from '@mui/icons-material/Speed'
import SecurityIcon from '@mui/icons-material/Security'
import BlockIcon from '@mui/icons-material/Block'
import EmailIcon from '@mui/icons-material/Email'
import ScheduleIcon from '@mui/icons-material/Schedule'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import GavelIcon from '@mui/icons-material/Gavel'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
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
      light: '#75a7ff',
      dark: '#004ecb',
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
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})

const notificationTypes = [
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: 'Position Alerts',
    description: 'Instant SMS when positions are opened, modified, or closed across any linked broker account.',
    examples: ['Position opened: BTCUSD Long @ $94,200', 'Position closed: ES1! +3.25pts', 'SL moved to breakeven: NQ1!'],
  },
  {
    icon: <ShowChartIcon fontSize="large" />,
    title: 'Price Action',
    description: 'Alerts triggered by custom price level conditions, breakouts, and technical signals.',
    examples: ['AAPL crossed $220 resistance', 'SPY VWAP reclaim confirmed', 'GC1! hitting 4H supply zone'],
  },
  {
    icon: <SwapHorizIcon fontSize="large" />,
    title: 'Entry / Exit Signals',
    description: 'Alerts for custom signal logic — trailing stops, complex conditional expressions, and multi-condition exits — that many brokers do not natively support. You receive the signal via SMS and act on it manually.',
    examples: ['SIGNAL: Trail stop hit — NQ1! exit @ 21,180', 'SIGNAL: ES1! long entry condition met', 'SIGNAL: GC1! 3-bar reversal + vol spike'],
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: 'Portfolio Updates',
    description: 'Scheduled hourly and end-of-day summaries of net P&L, open exposure, and account equity across all brokers.',
    examples: ['[HOURLY] Net P&L: +$842 | Open: 3 positions', '[EOD] Total equity: $48,230 | Day: +1.8%', '[EOD] Largest winner: NQ1! +$610'],
  },
]

const features = [
  { icon: <SpeedIcon />, label: 'Low-latency SMS delivery' },
  { icon: <SecurityIcon />, label: 'Private, self-hosted infrastructure' },
  { icon: <AccountBalanceIcon />, label: 'Multi-broker account aggregation' },
  { icon: <PhoneAndroidIcon />, label: 'Direct-to-phone notifications' },
  { icon: <NotificationsActiveIcon />, label: 'Real-time market event triggers' },
  { icon: <CheckCircleIcon />, label: 'Delivery confirmation receipts' },
]

export default function NotificationsPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: 'rgba(10, 14, 26, 0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Toolbar>
          <NotificationsActiveIcon sx={{ color: 'primary.main', mr: 1.5 }} />
          <Typography variant="h6" sx={{ color: 'primary.main', letterSpacing: 2, fontWeight: 700 }}>
            NINNIKU
          </Typography>
          <Chip
            label="SMS Notifications"
            size="small"
            sx={{ ml: 2, bgcolor: 'rgba(0,200,83,0.12)', color: 'primary.light', border: '1px solid rgba(0,200,83,0.3)' }}
          />
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #0a0e1a 0%, #0d1b2a 50%, #0a1a10 100%)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="md">
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mb={2}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                boxShadow: '0 0 10px #00c853',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { opacity: 1 },
                  '50%': { opacity: 0.4 },
                  '100%': { opacity: 1 },
                },
              }}
            />
            <Typography variant="caption" sx={{ color: 'primary.light', letterSpacing: 3, textTransform: 'uppercase' }}>
              Private Notification Service
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              background: 'linear-gradient(135deg, #e8eaf6 30%, #69f0ae 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
            }}
          >
            Trading Alerts,<br />Straight to Your Phone
          </Typography>

          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 560, mx: 'auto', mb: 4 }}>
            Ninniku is a self-hosted SMS notification platform that delivers real-time trading alerts
            — positions, price action, and order fills — across multiple broker accounts.
          </Typography>

          <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap">
            {['Positions', 'Price Action', 'Order Fills', 'Multi-Broker'].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.05)',
                  color: 'text.secondary',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Notification Types */}
        <Box mb={10}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
            Notification Types
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
            What Ninniku Monitors
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 520 }}>
            Every alert is formatted for fast reading on mobile, so you get the signal without friction.
          </Typography>

          <Grid container spacing={3}>
            {notificationTypes.map((type) => (
              <Grid size={{ xs: 12, sm: 6 }} key={type.title}>
                <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{type.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {type.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {type.description}
                    </Typography>
                    <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.06)' }} />
                    <Stack spacing={1}>
                      {type.examples.map((ex) => (
                        <Paper
                          key={ex}
                          elevation={0}
                          sx={{
                            px: 1.5,
                            py: 0.75,
                            bgcolor: 'rgba(0,200,83,0.07)',
                            border: '1px solid rgba(0,200,83,0.15)',
                            borderRadius: 1,
                          }}
                        >
                          <Typography variant="caption" sx={{ color: 'primary.light', fontFamily: 'monospace' }}>
                            {ex}
                          </Typography>
                        </Paper>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How It Works */}
        <Box mb={10}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                How It Works
              </Typography>
              <Typography variant="h4" sx={{ mt: 0.5, mb: 2 }}>
                A Personal Alerting Pipeline
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Ninniku connects directly to broker APIs and evaluates conditions in real time.
                When a trigger is met, it dispatches an SMS via Twilio to a pre-registered
                phone number — no apps, no dashboards, just a text.
              </Typography>
              <List dense disablePadding>
                {[
                  'Broker data streams feed into a custom event engine',
                  'Conditions are evaluated per-account and per-instrument',
                  'Matching events are formatted and queued for dispatch',
                  'Twilio delivers the SMS to the registered recipient',
                ].map((step, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          bgcolor: 'rgba(41,121,255,0.15)',
                          border: '1px solid rgba(41,121,255,0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, lineHeight: 1 }}>
                          {i + 1}
                        </Typography>
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={step}
                      slotProps={{ primary: { variant: 'body2', color: 'text.secondary' } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: '#0d1117',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f57' }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#28c840' }} />
                  <Typography variant="caption" sx={{ ml: 1, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                    ninniku — sms log
                  </Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {[
                    { time: '09:31:04', msg: '[FILL] AAPL 220C x5 @ $3.40 — Broker: IBKR', color: '#69f0ae' },
                    { time: '09:31:07', msg: '[PRICE] ES1! broke 5,940 — prev 4H high', color: '#75a7ff' },
                    { time: '09:32:15', msg: '[POS] NQ1! long opened @ 21,205 — size 2', color: '#69f0ae' },
                    { time: '09:45:52', msg: '[SIGNAL] Trail stop hit — CL1! exit @ 78.40', color: '#ffcc02' },
                    { time: '10:03:18', msg: '[POS] NQ1! long closed @ 21,340 — +135pts', color: '#69f0ae' },
                  ].map((line) => (
                    <Typography
                      key={line.time}
                      variant="caption"
                      sx={{ fontFamily: 'monospace', display: 'block', color: 'rgba(255,255,255,0.5)' }}
                    >
                      <Box component="span" sx={{ color: 'rgba(255,255,255,0.25)', mr: 1.5 }}>
                        {line.time}
                      </Box>
                      <Box component="span" sx={{ color: line.color }}>
                        {line.msg}
                      </Box>
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Features */}
        <Box mb={10}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
            Platform
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 5 }}>
            Built for Reliability
          </Typography>
          <Grid container spacing={2}>
            {features.map((f) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={f.label}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>{f.icon}</Box>
                  <Typography variant="body2">{f.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Opt-In Consent */}
        <Box mb={10}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
            Opt-In Consent
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 2 }}>
            How Consent Is Collected
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 580 }}>
            Ninniku uses a <strong style={{ color: '#e8eaf6' }}>verbal opt-in</strong> process.
            The registered recipient explicitly consents to receive SMS notifications before their
            phone number is configured in the service.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              border: '1px solid rgba(0,200,83,0.2)',
              display: 'flex',
              gap: 3,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <GavelIcon sx={{ color: 'primary.main', mt: 0.3, flexShrink: 0 }} />
            <Box flex={1} minWidth={200}>
              <Typography variant="h6" gutterBottom>
                Verbal Consent Script
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                The full verbal consent script — including all disclosures, opt-out terms, and the
                acknowledgement — is documented on a dedicated page. This page is submitted to
                Twilio as the <Box component="span" sx={{ fontFamily: 'monospace', color: '#e8eaf6' }}>OptInImageUrls</Box> reference
                for toll-free number verification.
              </Typography>
              <Box
                component={Link}
                to="/verbal-consent"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 2,
                  py: 1,
                  borderRadius: 1.5,
                  bgcolor: 'rgba(0,200,83,0.1)',
                  border: '1px solid rgba(0,200,83,0.3)',
                  color: 'primary.light',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { bgcolor: 'rgba(0,200,83,0.18)' },
                  transition: 'background-color 0.15s',
                }}
              >
                <OpenInNewIcon fontSize="small" />
                View Consent Script
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Messaging Policy */}
        <Box mb={6}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
            Messaging Policy
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 5 }}>
            How SMS Messaging Works
          </Typography>

          <Grid container spacing={3} mb={4}>
            {/* Frequency */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={0}
                sx={{ p: 3, height: '100%', bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                  <ScheduleIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Message Frequency</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Ninniku sends fewer than <strong style={{ color: '#e8eaf6' }}>10 messages per day</strong> to
                  the registered recipient. Message volume varies with market hours and active trading sessions.
                  No messages are sent outside of configured active periods.
                </Typography>
              </Paper>
            </Grid>

            {/* Opt-in */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={0}
                sx={{ p: 3, height: '100%', bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                  <HowToRegIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Opt-In</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  The sole recipient explicitly opts in by registering their phone number through the
                  Ninniku web interface. No phone number receives messages without prior configuration
                  by the operator. This is a private, invite-free service with no public sign-up.
                </Typography>
              </Paper>
            </Grid>

            {/* Opt-out */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={0}
                sx={{ p: 3, height: '100%', bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                  <BlockIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Opt-Out</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  The registered recipient can stop all messages at any time using either method:
                </Typography>
                <Stack spacing={1}>
                  <Paper elevation={0} sx={{ px: 1.5, py: 0.75, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 1 }}>
                    <Typography variant="body2">
                      <strong style={{ color: '#e8eaf6' }}>Via SMS</strong> — reply{' '}
                      <strong style={{ color: '#69f0ae', fontFamily: 'monospace' }}>STOP</strong> to
                      any message to immediately halt all outbound notifications
                    </Typography>
                  </Paper>
                  <Paper elevation={0} sx={{ px: 1.5, py: 0.75, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 1 }}>
                    <Typography variant="body2">
                      <strong style={{ color: '#e8eaf6' }}>Via website</strong> — remove the
                      registered phone number through the Ninniku configuration interface
                    </Typography>
                  </Paper>
                </Stack>
              </Paper>
            </Grid>

            {/* Contact */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                elevation={0}
                sx={{ p: 3, height: '100%', bgcolor: 'background.paper', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h6">Contact</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  For questions about this service or its messaging practices, contact the operator directly.
                  Reply <strong style={{ color: '#e8eaf6', fontFamily: 'monospace' }}>HELP</strong> to
                  any message for service information.
                </Typography>
                <Typography
                  component="a"
                  href="mailto:poligun@gmail.com"
                  variant="body2"
                  sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  poligun@gmail.com
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Carrier disclaimer */}
          <Paper
            elevation={0}
            sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <Typography variant="caption" color="text.secondary">
              Ninniku is a private, non-commercial notification service. Messages are sent exclusively to a
              single pre-registered phone number owned by the operator. No marketing messages, promotional
              content, or third-party recipient lists are used. Standard carrier message and data rates may apply.
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          py: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Ninniku &mdash; Private trading notification infrastructure
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
