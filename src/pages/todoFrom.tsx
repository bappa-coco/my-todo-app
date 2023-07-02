import * as React from 'react'
import {
  Alert,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export default function TodoFrom() {
  const [showErrorMsgView, setShowErrorMsgView] = React.useState(false)

  const [email, setEmail] = React.useState('')

  const addTodoList = () => {
  }
  const pageLayout = (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      columns={{ xs: 4, sm: 8, md: 12 }}
      p={1}
    >
      <Grid item xs={4} sm={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h1" sx={{ fontSize: 20 }} gutterBottom>
              <LockOpenIcon /> Forgotten Password
            </Typography>
            <Collapse in={showErrorMsgView}>
              <Alert
                icon={false}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setShowErrorMsgView(false)
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {}
              </Alert>
            </Collapse>
            <FormControl variant="standard" fullWidth>
              <TextField
                id="userName"
                label="Email Address"
                variant="standard"
                fullWidth
                sx={{mt:'10'}}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{ml:'auto'}}
              onClick={() => {
                addTodoList()
              }}
            >
              Send
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )

//   React.useEffect(() => {
//     window.scrollTo(0, 0)
//     // eslint-disable-next-line no-lone-blocks
//     {
//       forgotPasswordDetails !== undefined
//         ? forgotPasswordDetails.response !== undefined
//           ? forgotPasswordDetails.response.message !== undefined
//             ? forgotPasswordDetails.response.message!.length > 0
//               ? setShowErrorMsgView(true)
//               : setShowErrorMsgView(false)
//             : setShowErrorMsgView(false)
//           : setShowErrorMsgView(false)
//         : setShowErrorMsgView(false)
//     }
//   }, [forgotPasswordDetails])

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={6}>
        {pageLayout}
      </Grid>
    </Grid>
  )
}
