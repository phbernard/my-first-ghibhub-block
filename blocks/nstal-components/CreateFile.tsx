import { CreateFileInstructionsProps } from '@nstaldev/react-core'
import { Box } from "@primer/react";

const CreateFile = (props: CreateFileInstructionsProps) => (
  <div>
    <Box as="p" sx={{ marginTop: 0 }}>
      Populate <code>{props.path}</code> with:
    </Box>
    <Box as="pre" sx={{ backgroundColor: "canvas.subtle", p: 16, borderRadius: 6 }}>
      {props.content}
    </Box>
  </div>
)

export default CreateFile;
