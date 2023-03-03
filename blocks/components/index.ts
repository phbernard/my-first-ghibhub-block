import ActionButton from "./ActionButton"
import Connection from "./Connection"
import CreateFile from "./CreateFile"
import PrependToFile from "./PrependToFile"
import RunInstructions from "./RunCommands"
import Wrapper from "./Wrapper"

const AllComponents = {
  button: ActionButton,
  wrapper: Wrapper,
  connection: Connection,
  createFile: CreateFile,
  prependToFile: PrependToFile,
  runCommands: RunInstructions
}

export default AllComponents
