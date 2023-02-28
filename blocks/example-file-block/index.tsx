import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Nstaller, Connector } from "@nstaldev/react-core";
import { Box } from "@primer/react";
import AllComponents from "../nstal-components";
import { CreateFile } from '@nstaldev/react-core';
import MDX from "@mdx-js/runtime";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  const components = {
    CreateFile
  };

  return (
    <Box p={4}>
      <Nstaller components={AllComponents}>
        <Connector />

        <MDX components={components} scope={{ cf: 'Hihi' }}>
          {content}
        </MDX>
      </Nstaller>
    </Box>
  );
}
