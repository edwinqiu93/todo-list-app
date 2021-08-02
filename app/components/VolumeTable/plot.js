import React from 'react';
import plotly from 'plotly.js/dist/plotly';
// import Plot from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';


const Plot = createPlotlyComponent(plotly);
// export default () => (
//     <Plot />
// );

export default Plot;