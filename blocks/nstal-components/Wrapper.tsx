import { ActionWrapperProps } from '@nstaldev/react-core'
import { Box } from "@primer/react";

const Wrapper = (props: ActionWrapperProps) => (
  <Box>
    {props.children}
  </Box>
)

export default Wrapper;
