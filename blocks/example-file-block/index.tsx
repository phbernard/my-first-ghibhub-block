import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Nstaller, Connector } from "@nstaldev/react-core";
import { Box } from "@primer/react";
import AllComponents from "../nstal-components";

import { CreateFile } from '@nstaldev/react-core';

import "./index.css";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Nstaller components={AllComponents}>
          Hey!
          <Connector />

          Now do it:

          <CreateFile path="the-file.txt" content="Hey!!" />
        </Nstaller>
      </Box>
    </Box>
  );
}
