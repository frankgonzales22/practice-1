import React from "react";
import ReactDOM from "react-dom";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush 
} from 'recharts';

const data = [
    {
        "territorycode": 14,
        "regioncode": "OS",
        "nsTotal": 1946,
        "qouta": 0
    },
    {
        "regioncode": "MW1",
        "territorycode": 28,
        "nsTotal": 11314,
        "qouta": 14700
    },
    {
        "regioncode": "NCT2-2",
        "territorycode": 28,
        "nsTotal": 28488,
        "qouta": 21700
    },
    {
        "territorycode": 33,
        "regioncode": "VW2-2",
        "nsTotal": 11314,
        "qouta": 14600
    },
    {
        "regioncode": "MC2",
        "territorycode": 35,
        "nsTotal": 15662,
        "qouta": 17500
    },
    {
        "regioncode": "MIMAROPA3",
        "territorycode": 35,
        "nsTotal": 9470,
        "qouta": 14000
    },
    {
        "regioncode": "NCT2-3",
        "territorycode": 35,
        "nsTotal": 36304,
        "qouta": 30800
    },
    {
        "regioncode": "VW1-1",
        "territorycode": 35,
        "nsTotal": 13636,
        "qouta": 20300
    },
    {
        "territorycode": 41,
        "regioncode": "VW1-2",
        "nsTotal": 11452,
        "qouta": 17550
    },
    {
        "regioncode": "CL2-2",
        "territorycode": 42,
        "nsTotal": 13928,
        "qouta": 16100
    },
    {
        "regioncode": "MC1",
        "territorycode": 42,
        "nsTotal": 32520,
        "qouta": 34300
    },
    {
        "regioncode": "MC3",
        "territorycode": 42,
        "nsTotal": 19228,
        "qouta": 25200
    },
    {
        "regioncode": "MN1",
        "territorycode": 42,
        "nsTotal": 12980,
        "qouta": 21700
    },
    {
        "regioncode": "NCT2-1",
        "territorycode": 42,
        "nsTotal": 30694,
        "qouta": 28700
    },
    {
        "regioncode": "VW2-1",
        "territorycode": 42,
        "nsTotal": 19106,
        "qouta": 21000
    },
    {
        "regioncode": "CL1-2",
        "territorycode": 49,
        "nsTotal": 20008,
        "qouta": 21700
    },
    {
        "regioncode": "CL2-1",
        "territorycode": 49,
        "nsTotal": 20590,
        "qouta": 20300
    },
    {
        "regioncode": "CLBZ2",
        "territorycode": 49,
        "nsTotal": 38200,
        "qouta": 28000
    },
    {
        "regioncode": "MC4",
        "territorycode": 49,
        "nsTotal": 20518,
        "qouta": 26600
    },
    {
        "regioncode": "MIMAROPA2",
        "territorycode": 49,
        "nsTotal": 36104,
        "qouta": 32200
    },
    {
        "regioncode": "MN2",
        "territorycode": 49,
        "nsTotal": 17604,
        "qouta": 28000
    },
    {
        "regioncode": "NCT1-2",
        "territorycode": 49,
        "nsTotal": 54998,
        "qouta": 37100
    },
    {
        "regioncode": "NCT3-1",
        "territorycode": 49,
        "nsTotal": 44566,
        "qouta": 34650
    },
    {
        "regioncode": "NCT3-2",
        "territorycode": 49,
        "nsTotal": 42088,
        "qouta": 36750
    },
    {
        "regioncode": "VC1",
        "territorycode": 49,
        "nsTotal": 36756,
        "qouta": 37800
    },
    {
        "regioncode": "VER1",
        "territorycode": 49,
        "nsTotal": 13290,
        "qouta": 21700
    },
    {
        "regioncode": "VER2",
        "territorycode": 49,
        "nsTotal": 11424,
        "qouta": 20300
    },
    {
        "regioncode": "BT1",
        "territorycode": 56,
        "nsTotal": 24102,
        "qouta": 25900
    },
    {
        "regioncode": "CL1-1",
        "territorycode": 56,
        "nsTotal": 25832,
        "qouta": 23100
    },
    {
        "regioncode": "IR",
        "territorycode": 56,
        "nsTotal": 11188,
        "qouta": 23100
    },
    {
        "regioncode": "MIMAROPA1",
        "territorycode": 56,
        "nsTotal": 20050,
        "qouta": 24500
    },
    {
        "regioncode": "MW2",
        "territorycode": 56,
        "nsTotal": 20166,
        "qouta": 32200
    },
    {
        "regioncode": "NCT1-3",
        "territorycode": 56,
        "nsTotal": 58414,
        "qouta": 48300
    },
    {
        "regioncode": "VC2",
        "territorycode": 56,
        "nsTotal": 24420,
        "qouta": 30100
    },
    {
        "regioncode": "BT2",
        "territorycode": 63,
        "nsTotal": 21002,
        "qouta": 23800
    },
    {
        "regioncode": "CVR",
        "territorycode": 63,
        "nsTotal": 19672,
        "qouta": 24500
    },
    {
        "regioncode": "NCT1-1",
        "territorycode": 63,
        "nsTotal": 49848,
        "qouta": 42000
    },
    {
        "territorycode": 70,
        "regioncode": "CLBZ1",
        "nsTotal": 34764,
        "qouta": 33950
    },
    {
        "territorycode": 119,
        "regioncode": "",
        "nsTotal": 466823,
        "qouta": 487575
    }
]

const color = ["#8884d8", "#82ca9d", "orange", "pink"]

class Appers extends React.Component {

  state = {
    type: "Line"
  }

  handleChange = (e : any) => {
    this.setState({type: e.target.value})
  }

  fetchChart = () => {
    const {type} = this.state
    switch(type){
      case "Line": return <MyLineChart key={type}/>
      case "Bar": return <MyBarChart key={type}/>
    //   case "Stacked": return <MyBarChart stacked={this.stacked} key={type}/>
      default: return <MyLineChart />
    }
  }
  render(){
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>Line</option>
          <option>Bar</option>
          <option>Stacked</option>
        </select>
      {this.fetchChart()}
      </div>
    )
  }
}

class MyLineChart extends React.Component {

  getLineChart = () => {
    const keysArr = Object.keys(data[0]).slice(1);
    const lineArr= [] as any;
    keysArr.forEach((item, index)=> {
      lineArr.push(<Line type="monotone" dataKey={item} stroke={color[index]} />)
    })
    return lineArr;
  }

  modifyFormatter = (value : any, name : any, props : any) => {
    const nameJSX = <span><span style={{
      display: "inline-block",
      marginRight: "5px",
      borderRadius: "10px",
      width: "10px",
      height: "10px",
      backgroundColor: props.color
    }}></span>{name} : {value}</span>
    return [nameJSX];
  }

  render() {
    return (
      // <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip formatter={this.modifyFormatter}/>
          <Legend />
        {this.getLineChart()}
        <Brush dataKey={Object.keys(data[0])[0]}>
          <LineChart>
            {this.getLineChart()}
          </LineChart>
        </Brush>
        </LineChart>
      //  </ResponsiveContainer>
    );
  }
}

class MyBarChart extends React.Component {

    getBar = () => {
      const {stacked} = this.props as any;
      const keysArr = Object.keys(data[0]).slice(1);
      const barArr= [] as any;
      keysArr.forEach((item, index)=> {
        barArr.push(<Bar dataKey={item} 
            // stackedId={stacked ? "a" : null} 
            stackId={stacked ? 'a' : ''}
            fill={color[index]} />)
      })
      return barArr;
    }
  
    modifyFormatter = (value : any, name : any, props : any) => {
      console.log(value, name , props, "props");
      const nameJSX = <span><span style={{
        display: "inline-block",
        marginRight: "5px",
        borderRadius: "10px",
        width: "10px",
        height: "10px",
        backgroundColor: props.color
      }}></span>{name} : {value}</span>;
      let result = [nameJSX].reverse();
      // console.log(result, "result");
      return result;
    }
  
     handleSort = (item1 :any, item2 : any) => {
      // console.log(item1, item2);
      return 1;
    }
  
    render() {
      return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip formatter={this.modifyFormatter}
        //   itemSorter={() => this.handleSort}
        //    itemSorter={this.handleSort}
           />
          <Legend />
          {this.getBar()}
          <Brush dataKey={Object.keys(data[0])[0]}>
            <BarChart>
              {this.getBar()}
            </BarChart>
          </Brush>
        </BarChart>
      );
    }
  }

  export default Appers