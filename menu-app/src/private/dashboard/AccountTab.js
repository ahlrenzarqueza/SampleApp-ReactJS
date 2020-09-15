import React, { Component } from 'react';
import { Dropdown, DropdownButton, Tab, Col, Row } from 'react-bootstrap';
import AnimatedNumber from '../AnimatedNumber';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Line, LineChart, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';
import './AccountTab.css';

export default class AccountTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accounts: {
                "first": "Debit Card",
                "second": "Cash"
            },
            activeaccount: "summary"
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    onTabChange = (eventKey) => {
        console.log(eventKey);
        this.setState({activeaccount: eventKey}, () => {

        });
    }

    render() {
        const {activeaccount: active} = this.state;
        const dropitems = [
            <Dropdown.Item eventKey="summary" active={active === "summary"}>All Accounts</Dropdown.Item>,
            <Dropdown.Divider />
        ];
        const tabitems = [
            <Tab.Pane eventKey="summary">
                <AccountTabPage totalamt={50000} id="summary"/>
            </Tab.Pane>
        ]
        for(var key in this.state.accounts) {
            dropitems.push(<Dropdown.Item active={active === key} 
                eventKey={key}>{this.state.accounts[key]}</Dropdown.Item>)
            tabitems.push(<Tab.Pane eventKey={key}>
                    <AccountTabPage totalamt={50000} id={key}/>
                </Tab.Pane>)
        }
        return (
            <>
                <Tab.Container id="left-tabs-example" defaultActiveKey="summary">
                    <Row>
                        <Col>
                            <Dropdown onSelect={this.onTabChange}>
                                <DropdownButton
                                    id={'accountvariant'}
                                    title={active === 'summary' ? 'All Accounts' : this.state.accounts[active]}
                                >
                                    {dropitems}
                                </DropdownButton>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Content>
                                {tabitems}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </>
        )
    }
}

function AccountTabPage ({id, totalamt}) {
    const data = [];
    const sampledata = [
        {
            key: "Salary",
            value: 120000
        },
        {
            key: "Savings",
            value: 20000
        },
        {
            key: "Investments",
            value: 8000
        },
        {
            key: "Insurance",
            value: 10000
        }
    ]

    sampledata.map((obj) => {
        var randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
        });

        let insert = {
            color: randomColor,
            title: obj.key,
            value: obj.value,
        };

        data.push(insert);
    });

    const RADIAN = Math.PI / 180;
    const piePercentage = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
      }) => {
         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <Row className="AccountTabPage p-4">
            <Col>
                <div className="balcont">
                    <h4>Balance</h4>
                    <AnimatedNumber value={totalamt} prefix={"₱"} withComma={true} default={0}/>
                </div>
            </Col>
            <Col>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie dataKey="value" isAnimationActive={false} data={data} cx={"50%"} cy={"50%"} outerRadius={"100%"} fill="#8884d8" 
                            label={piePercentage} />
                        <Tooltip/>
                        {/* <Legend payload={data.map(e => {return {value: e.title, id: e.title}})}/> */}
                    </PieChart>
                </ResponsiveContainer>
            </Col>
            <Col>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    )
}
