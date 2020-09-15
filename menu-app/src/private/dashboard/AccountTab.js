import React, { Component } from 'react';
import { Dropdown, DropdownButton, Tab, Col, Row } from 'react-bootstrap';
import AnimatedNumber from '../AnimatedNumber';
import { PieChart } from "react-minimal-pie-chart";

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
            <Dropdown.Item eventKey="summary" active={active === "summary"}>All</Dropdown.Item>,
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
                        <Dropdown onSelect={this.onTabChange}>
                            <DropdownButton
                                id={'accountvariant'}
                                title={active === 'summary' ? 'All Accounts' : this.state.accounts[active]}
                            >
                                {dropitems}
                            </DropdownButton>
                        </Dropdown>
                    </Row>
                    <Row>
                        <Tab.Content>
                            {tabitems}
                        </Tab.Content>
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
            value: 50
        },
        {
            key: "Savings",
            value: 50
        },
        {
            key: "Investments",
            value: 50
        },
        {
            key: "Insurance",
            value: 50
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
    return (
        <Row>
            <Col>
                <AnimatedNumber value={totalamt} prefix={"₱"} withComma={true} default={0}/>
            </Col>
            <Col>
                <PieChart
                animate
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={data}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={0}
                radius={50}
                rounded
                startAngle={0}
                viewBoxSize={[100, 100]}
                label={(data) => data.dataEntry.title}
                labelPosition={65}
                labelStyle={{
                    fontSize: "10px",
                    fontColor: "FFFFFA",
                    fontWeight: "800",
                }}
                />
            </Col>
        </Row>
    )
}
