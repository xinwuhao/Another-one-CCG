import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Addgoods = () => {
    function callback(key) {
        console.log(key);
    }
    return (
        <div style={{ paddingTop: 10 }}>
            <div style={{ fontSize: 25, marginBottom: 20 }}>添加商品</div>
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Addgoods
