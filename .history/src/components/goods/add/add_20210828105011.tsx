import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Addgoods = () => {
    let callback = (key: any) => {
        console.log(key);
    }
    return (
        <div style={{ paddingTop: 10 }}>
            <div style={{ fontSize: 25, marginBottom: 20 }}>添加商品</div>
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="数字" key="1">
                        123
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Addgoods
