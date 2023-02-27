import { ConnectionInstructionsProps } from '@nstaldev/react-core'

const Connection = (props: ConnectionInstructionsProps) => (
  <div>
    {props.command} / 
    {props.status}
  </div>
)

export default Connection;
