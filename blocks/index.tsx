import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Nstaller, Connector } from "@nstaldev/react-core";
import { Box, useTheme } from "@primer/react";
import AllComponents from "./components";
import { CreateFile, RunCommands, StartEverRunningCommand, VisitLink, Milestone } from '@nstaldev/react-core';
import MDX from "@mdx-js/runtime";
import ConfettiExplosion from "react-confetti-explosion";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  const components = {
    CreateFile,
    RunCommands,
    StartEverRunningCommand,
    VisitLink,
    Milestone
  };

  const theme = useTheme();

  return (
    <Box p={4}>
      <Nstaller components={AllComponents}>
        <Connector />

        <MDX components={components} scope={{ cf: 'Hihi' }}>
          {content}
        </MDX>

        <Milestone>
          <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginY: 32 }}>
            <Box sx={{ fontWeight: theme.theme?.fontWeights.semibold, fontSize: theme.theme?.fontSizes[3] }}>
              Well done!
              <ConfettiExplosion />
            </Box>
          </Box>
        </Milestone>
      </Nstaller>
    </Box>
  );
}
