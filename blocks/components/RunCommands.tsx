import { RunCommandsInstructionsProps, ExecutionStatus } from '@nstaldev/react-core'
import { Box, Spinner } from '@primer/react'
import { CheckCircleFillIcon, XCircleFillIcon, XCircleIcon } from '@primer/octicons-react'
import CommandOutput from './CommandOutput';

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

    <Box sx={{ backgroundColor: "white", marginY: 16, borderRadius: 6 }}>
      <Box sx={{ backgroundColor: "neutral.subtle", paddingX: 16, paddingY: 2, borderRadius: 6 }}>
        {props.commands.map((command, i) => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box as='pre' sx={{ marginY: 2, flexGrow: 1 }}>
                {command}
              </Box>
              <div>
                <StatusIcon status={props.status && props.status[i]} />
              </div>
            </div>
            {props.output && props.output[i] && (
              <CommandOutput output={props.output[i]} />
            )}
          </div>
        ))}
      </Box>
    </Box>
  </div>
);

export default RunCommands
