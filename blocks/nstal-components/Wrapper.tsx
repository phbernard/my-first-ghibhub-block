import { ActionWrapperProps } from '@nstaldev/react-core'
import { Box } from "@primer/react";

const Wrapper = (props: ActionWrapperProps) => (
  <Box sx={{
    transitionProperty: 'padding,backgroundColor',
    p: props.automated ? 2 : 0,
    backgroundColor: props.automated ? 'accent.subtle' : 'background.default'
  }}>
    {props.children}
  </Box>
)

export default Wrapper;
