import { RunCommandsInstructionsProps, ExecutionStatus } from '@nstaldev/react-core'
import { Box, Spinner } from '@primer/react'
import { CheckCircleFillIcon, XCircleFillIcon, XCircleIcon } from '@primer/octicons-react'

type StatusIconProps = { status?: ExecutionStatus };

const StatusIcon = (props: StatusIconProps) => {
  switch(props.status) {
  case(ExecutionStatus.Running):
    return <Spinner size='small' />;

  case(ExecutionStatus.Completed):
    return (
      <Box sx={{ color: 'success.emphasis' }}>
        <CheckCircleFillIcon size='small' />
      </Box>
    );

  case(ExecutionStatus.Error):
    return (
      <Box sx={{ color: 'danger.emphasis' }}>
        <XCircleFillIcon size='small' />
      </Box>
    );

  default:
    return <></>;
  }
}

const RunCommands = (props: RunCommandsInstructionsProps) => (
  <div>
    <Box as="p" sx={{ marginTop: 0 }}>
      Run the following commands:
    </Box>

    <Box sx={{ backgroundColor: "white", borderRadius: 6, marginY: 16 }}>
      <Box sx={{ backgroundColor: "neutral.subtle", p: 16 }}>
        {props.commands.map((command, i) => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box as='pre' sx={{ marginY: 2, flexGrow: 1 }}>
                {command}
              </Box>
              <div>
                <StatusIcon status={props.status[i]} />
              </div>
            </div>
            {props.output[i] && (
              <Box as='pre' sx={{ marginTop: 0, marginBottom: 2, maxHeight: 50, overflowY: 'auto', borderRadius: 6, p: 1, backgroundColor: 'neutral.emphasis', color: 'fg.onEmphasis' }}>
                {props.output[i]}
              </Box>
            )}
          </div>
        ))}
      </Box>
    </Box>
  </div>
)

export default RunCommands
