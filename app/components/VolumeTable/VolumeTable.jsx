import React from 'react';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import PivotTable from 'react-pivottable/PivotTable';
import dynamic from 'next/dynamic';
import createPlotlyComponent from 'react-plotly.js/factory';
import autobind from 'react-decoration/lib/decorators/functions/autobind';
import PerfectScrollbar from "react-perfect-scrollbar";
import { stickHeader } from 'react-pivottable/Utilities';
import styles from "./VolumeTable.module.scss";
// console.log("styles", styles);

// import { aggregators,  aggregatorTemplates } from 'react-pivottable/Utilities';

const DynamicPlot = dynamic(() => import('./plot'), {
    ssr: false
})

const PlotlyRenderers = createPlotlyRenderers(DynamicPlot);

class PivotTableUISmartWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {pivotState: ""};
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         stickHeader()
    //     }, 0);
    // }

    // componentDidUpdate() {
    //     setTimeout(() => {
    //         stickHeader()
    //     }, 0);
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("inner wrapper next props", nextProps);
        let { customName, data } = nextProps;
        // console.log("next props", nextProps);

        let dataCopy = [ ...data ];
        
        if (customName == "Difference" || customName == "Percentage" || customName == "Overall") {
            let maxObj = (nextProps.maxObj || {});
            // console.log("max obj", maxObj);
            let { set1Name, set2Name, set1Data, set2Data } = nextProps;
            // console.log("PROPS", nextProps);
            // console.log("max obj", maxObj);
            // console.log("data copy", dataCopy);

            //make sure same weights in each method
            //find unique weights for an array of objects
            let set2UniqueWeights = set2Data.reduce((acc, curr) => {
                if (!acc.includes(curr.WeightBelow)) {
                    acc.push(curr.WeightBelow);
                }
                return acc;
            }, [])

            // console.log("set2 unique weights", set2UniqueWeights);
            let similarWeights = [];
            for (let row of set1Data) {
                if (set2UniqueWeights.includes(row.WeightBelow) && !similarWeights.includes(row.WeightBelow)) {
                    similarWeights.push(row.WeightBelow);
                }
            }
            // console.log("similar weights", similarWeights);

            //finding maxWeight btwn the two methods
            let method1MaxWeight = maxObj[set1Name].maxWeight;
            let method2MaxWeight = maxObj[set2Name].maxWeight;
            let maxWeight = method1MaxWeight < method2MaxWeight ? method1MaxWeight : method2MaxWeight;
            // console.log("maxWeight", maxWeight);

            //finding same zones btwn the two methods
            let method1Zones = maxObj[set1Name].zone;
            let method2Zones = maxObj[set2Name].zone;
            let methodIntersection = method1Zones.filter(zone => method2Zones.includes(zone));
            
            dataCopy = dataCopy.filter(row => row.WeightBelow <= maxWeight && methodIntersection.includes(row.ZoneNum) && similarWeights.includes(row.WeightBelow));
            // console.log("dataCopy new", dataCopy);
            let propsClone = { ...nextProps};
            propsClone.data = dataCopy;
            return {
                pivotState: propsClone
            }
        } else {
            return {
                pivotState: nextProps
            }
        }
    }

    render() {
        // console.log("PROPSSSSSSS", this.props);
        // console.log("smart wrapper statee", this.state);
        const { pivotState } = this.state;
        // console.log("TEMPLATEs", aggregatorTemplates);
        // console.log("aggregators", aggregators);
        return (
            <>
                { pivotState.hasOwnProperty("data") && pivotState.data.length ? (
                    <div className="double-scroll-table">
                        	<PerfectScrollbar
                                className="right table-fix-head"
                                containerRef={ref => this.leftScroll = ref}
                                onScrollY={container => {
                                    // console.log("this", this);
                                    this.leftScroll.scrollTop = container.scrollTop
                                }}
                                // onScrollY={container => this.rightScroll.scrollTop = container.scrollTop}
                            >
                                <div>
                                    <PivotTable
                                        renderers={Object.assign(
                                            {},
                                            TableRenderers
                                            // createPlotlyRenderers(<DynamicPlot />)
                                            // PlotlyRenderers
                                        )}
                                        {...this.state.pivotState}
                                        onChange={s => this.setState({pivotState: s})}
                                        unusedOrientationCutoff={Infinity}
                                    />
                                </div>
                            </PerfectScrollbar>
                         
                    </div>
                    //     <div className="double-scroll-table">
                    //         <PivotTable
                    //             renderers={Object.assign(
                    //                 {},
                    //                 TableRenderers
                    //                 // createPlotlyRenderers(<DynamicPlot />)
                    //                 // PlotlyRenderers
                    //             )}
                    //             {...this.state.pivotState}
                    //             onChange={s => this.setState({pivotState: s})}
                    //             unusedOrientationCutoff={Infinity}
                    //         /> 
                    // </div>
                  
                ) : (
                    <div style={{ maxWidth: "475px" }}>
                        No Zone & Weight Combinations match between the datasets. Please double check your imported file or contact an admin.
                    </div>
                ) }
            </>   
        )
              
    }
}

export default class VolumeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // console.log("PROPS", this.props)
        const { custom, customName, data } = this.props;
        let volumeMethodsArr = ["volumeMethodCounts"];
        let volumeWeightsArr = ["volumeWeightCounts"];

        let stateObj = {
                data,
                rows: volumeMethodsArr.includes(customName) ? ['ShipMethodCode']: ['WeightBelow'],
                cols: ['ZoneNum'],
                aggregatorName: volumeMethodsArr.includes(customName) ? 'Count' : custom ? `${customName}` : 'Average',
                vals: volumeMethodsArr.includes(customName) ? ['ShipMethodCode'] : ['ShipCostFixed'],
                rendererName: customName == "Percentage" || customName == "Difference" || customName == "Overall" ? "Table Heatmap" : "Table",
                enableRowSort: false,
                enableColSort: true,
                // plotlyOptions: {width: 900, height: 500},
                // plotlyConfig: {}
                // aggregators: {
                //     "First": function () { return "hi" }
                // }
                // tableOptions: {
                //     clickCallback: function(e, value, filters, pivotData) {
                //         var names = [];
                //         pivotData.forEachMatchingRecord(filters, function(
                //             record
                //         ) {
                //             names.push(record.Meal);
                //         });
                //         alert(names.join('\n'));
                //     },
                // },
        }

        if (stateObj.rendererName == "Overall") {
            stateObj.rendererOptions = {
                heatmap: {
                    colorScaleGenerator: function(values) {
                        // Plotly happens to come with d3 on board
                        return Plotly.d3.scale.linear()
                            .domain([-10, -5, 0])
                            .range(["#77F", "#FFF", "#F77"])
                    }
                }
            }
        }
        
        custom && customName ? stateObj.aggregators = {} : null;
        custom && customName == "Difference" ? stateObj.aggregators['Difference'] =  function () { return function() {
            return {
                m: 0,
                n: 0,
                diff: 0,
                push: function push(record) {
                  if (!isNaN(parseFloat(record["ShipCostFixed"]))) {
                    // this.diff += parseFloat(record["ShipCostFixed"]);
                    var x = parseFloat(record["ShipCostFixed"]);
                    if (isNaN(x)) {
                        return;
                      }
                    this.n += 1.0;
                    if (this.n == 1.0) {
                        this.m = x;
                    } else {
                        this.m = x - this.m;
                    }

                  }
                },
                value: function value() {
                  return this.m;
                },
                format: function(x) { return x.toFixed(2) },
                numInputs: 0
                // numInputs: typeof attr !== 'undefined' ? 0 : 1
            }
        }} : null

        custom && customName == "Percentage" ? stateObj.aggregators['Percentage'] =  function () { return function() {
            return {
                m: 0,
                n: 0,
                diff: 0,
                push: function push(record) {
                  if (!isNaN(parseFloat(record["ShipCostFixed"]))) {
                    // this.diff += parseFloat(record["ShipCostFixed"]);
                    var x = parseFloat(record["ShipCostFixed"]);
                    if (isNaN(x)) {
                        return;
                      }
                    this.n += 1.0;
                    if (this.n == 1.0) {
                        this.m = x;
                    } else {
                        this.m = (1 - ((this.m) / x)) * 100;
                    }

                  }
                },
                value: function value() {
                  return this.m;
                },
                format: function(x) { return x.toFixed(1) + "%" },
                numInputs: 0
                // numInputs: typeof attr !== 'undefined' ? 0 : 1
            }
        }} : null

        custom && customName == "Overall" ? stateObj.aggregators['Overall'] =  function () { return function() {
            return {
                m: 0,
                n: 0,
                diff: 0,
                push: function push(record) {
                   
                  if (!isNaN(parseFloat(record["ShipCostFixed"]))) {
                    // this.diff += parseFloat(record["ShipCostFixed"]);
                    // console.log("record", record); 
                    var x = parseFloat(record["ShipCostFixed"]);
                    if (isNaN(x)) {
                        return;
                      }
                    this.n += 1.0;
                    // 1's and 2's
                    if (this.n == 1.0) {
                        this.m = x;
                    } else {
                        this.m = x > this.m ? 1 : 2
                    }

                    //print out method name
                    // if (this.n == 1.0) {
                    //     this.m = x;
                    //     this.diff = record["ShipMethodCode"];
                    // } else {
                    //     this.m = x < this.m ? record["ShipMethodCode"] : this.diff
                    // }

                  }
                },
                value: function value() {
                  return this.m;
                },
                format: function(x) { return x },
                numInputs: 0
                // numInputs: typeof attr !== 'undefined' ? 0 : 1
            }
        }} : null

        console.log("STATE OBJJJ", stateObj);
        this.setState({
            mode: 'demo',
            filename: 'Sample Dataset: Tips',
            pivotState: stateObj
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("new state", newState);
        let newState = { ...prevState };
        // console.log("prev newState", newState);
        Object.keys(newState).length && nextProps && nextProps?.data.length ? newState.pivotState.data = nextProps.data : null;
        // console.log("POST newState", newState);
        return {
            ...newState
        }
    }

    render() {
        // console.log("PROPS2", this.state.pivotState);
        // console.log("PROPS3", {...this.state.pivotState});
        const { customName, set1Name="", set2Name="", maxObj={}, data, set1Data=[], set2Data=[] } = this.props;
        // console.log("set1Name", set1Name);
        return (
            // <div>
            //     <div className="row">
            //         <PivotTableUISmartWrapper 
            //             customName={customName} 
            //             set1Name={set1Name}
            //             set2Name={set2Name}
            //             maxObj={maxObj}
            //             data={data}
            //             set1Data={set1Data}
            //             set2Data={set2Data}
            //             {...this.state.pivotState} 
            //         />
            //     </div>
            // </div>
                    <PivotTableUISmartWrapper 
                        customName={customName} 
                        set1Name={set1Name}
                        set2Name={set2Name}
                        maxObj={maxObj}
                        data={data}
                        set1Data={set1Data}
                        set2Data={set2Data}
                        {...this.state.pivotState} 
                    />
        );
    }
}
