import { ActionWrapperProps, ActionStatus } from '@nstaldev/react-core'
import { Box } from "@primer/react";

const Wrapper = (props: ActionWrapperProps) => {
  let colorFamily;
  switch(props.status) {
    case(ActionStatus.Later):
    colorFamily = 'neutral';
    break;

    case(ActionStatus.NextToRun):
    case(ActionStatus.Running):
    case(ActionStatus.Starting):
    colorFamily = 'accent';
    break;

    case(ActionStatus.Completed):
    colorFamily = 'success';
    break;

    case(ActionStatus.Error):
    colorFamily = 'danger';
    break;
  }

  return (
    <Box sx={{
      transitionProperty: 'padding background-color boxShadow border-color',
      transitionDuration: '250ms',
      py: 2,
      px: props.automated ? 2 : 0,
      borderRadius: 1,
      backgroundColor: !props.automated ? 'background.default' : `${colorFamily}.subtle`,
      borderColor: props.automated ? `${colorFamily}.muted` : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      boxShadow: props.automated ? 'shadow.medium' : undefined
    }}>
      {props.children}
    </Box>
  )
};

export default Wrapper;
