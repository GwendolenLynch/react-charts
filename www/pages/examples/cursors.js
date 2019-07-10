// @source sourceCode
import React from 'react'

//

import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from '../../../dist'

let sourceCode

export default () => {
  const { data, randomizeData } = useChartConfig({
    series: 10
  })
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart
          data={data}
          series={series}
          axes={axes}
          tooltip
          primaryCursor
          secondaryCursor
        />
      </Box>
      <br />
      <SyntaxHighlighter code={sourceCode} />
    </>
  )
}
// @source sourceCode