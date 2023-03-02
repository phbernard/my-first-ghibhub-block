import { ActionButtonProps, ActionStatus } from '@nstaldev/react-core'
import { Button, Spinner } from '@primer/react'

const ActionButton = (props: ActionButtonProps) => {
  const inProgress = props.status === ActionStatus.Starting || props.status === ActionStatus.Running;

  return (
    <Button
      onClick={props.onClick}
      disabled={inProgress}
    >
      {inProgress ? <Spinner size='small' /> : <>Run</>}
    </Button>
  )
}

export default ActionButton;
