import { ActionStatus, ConnectionInstructionsProps, ConnectionStatus } from '@nstaldev/react-core'
import { Box, Spinner, useTheme } from "@primer/react"
import Wrapper from './Wrapper';
import TransitionStack from './TransitionStack';

const Connection = (props: ConnectionInstructionsProps) => {
  let currentElement;
  switch(props.status) {
    case(ConnectionStatus.NotConnected):
    currentElement = 0;
    break;

    case(ConnectionStatus.Connected):
    currentElement = 1;
    break;

    case(ConnectionStatus.Error):
    currentElement = 2;
    break;
  }

  const theme = useTheme();
  console.log(theme);

  return (
    <Wrapper
      automated
      status={props.status === ConnectionStatus.NotConnected
        ? ActionStatus.NextToRun
        : (props.status === ConnectionStatus.Connected ? ActionStatus.Completed : ActionStatus.Error)
      }
    >
      <TransitionStack
        currentElement={currentElement}
        elements={[
          <div style={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                To automate the following instructions, run:
              </Box>
              <Spinner size='small' />
            </Box>
            <Box sx={{ backgroundColor: "canvas.subtle", p: 16, borderRadius: 6 }} as="pre">
              {props.command}
            </Box>
          </div>,
          <Box sx={{ fontWeight: theme.theme?.fontWeights.semibold, fontSize: theme.theme?.fontSizes[3] }}>
            Connected!
          </Box>,
          <Box sx={{ fontWeight: theme.theme?.fontWeights.semibold, fontSize: theme.theme?.fontSizes[3] }}>
            An error occured. Please refresh this page.
          </Box>
        ]
      }
      />
    </Wrapper>
  )
};

export default Connection;
