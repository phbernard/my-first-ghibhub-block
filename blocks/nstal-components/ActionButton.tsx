import { ActionButtonProps } from '@nstaldev/react-core'
import { Button } from '@primer/react'

const ActionButton = (props: ActionButtonProps) => (
  <Button onClick={props.onClick}>
    Run
  </Button>
)

export default ActionButton;
