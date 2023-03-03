import { Box } from '@primer/react'
import { useEffect, useRef } from 'react';

export type CommandOutputProps = { output: string };

const CommandOutput = (props: CommandOutputProps) => {
  const ref = useRef<HTMLPreElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [ props.output ]);

  return (
    <>
      <Box
        sx={{
          marginTop: 0,
          marginBottom: 2,
          maxHeight: '100px',
          borderRadius: 6,
          p: 1,
          backgroundColor: 'neutral.emphasis',
          color: 'fg.onEmphasis',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          as='pre'
          className="nstal-command-output"
          ref={ref as any} // In the end this is really a Pre
          sx={{
            maxWidth: '100%',
            minHeight: 0,
            flexGrow: 1,
            overflow: 'auto',
            marginY: 0
          }}
        >
          {props.output}
        </Box>
      </Box>
      <style>
        {`.nstal-command-output::-webkit-scrollbar {
          width: 4px;
          height: 4px;
          background-color: #6e7781;
        }

        .nstal-command-output::-webkit-scrollbar-thumb {
          background-color: white;
          border-radius: 2px;
        }
        `}
      </style>
    </>
  )
}

export default CommandOutput
