import { ConnectionInstructionsProps, ConnectionStatus } from '@nstaldev/react-core'
import { Box } from "@primer/react"
import { Spinner } from '@primer/react'

const Connection = (props: ConnectionInstructionsProps) => (
  <Box>
    {props.status === ConnectionStatus.NotConnected && (
      <>
        <Box sx={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>
            To automate the following instructions, run:
          </Box>
          <Spinner size='small' />
        </Box>
        <Box sx={{ backgroundColor: "canvas.subtle", p: 16, borderRadius: 6 }} as="pre">
          {props.command}
        </Box>
      </>
    )}
    {props.status === ConnectionStatus.Connected && (
      <Box>
        Connected!
      </Box>
    )}
    {props.status === ConnectionStatus.Error && (
      <Box>
        An error occured. Please refresh this page.
      </Box>
    )}
  </Box>
)

export default Connection;
