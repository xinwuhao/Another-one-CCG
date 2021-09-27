import React, { useState } from 'react'
import { Input, Button, Tabs } from 'antd';
import Add from '@/components/goods/add/add'
import styles from './add.less'

const { Search } = Input;
const { TabPane } = Tabs;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    let [variable, setVariable] = useState<boolean>(false)
    //添加按钮
    let addBtn = (item: boolean) => {
        setVariable(item)
    }
    //标签栏
    let callback = (key: any) => {
        console.log(key);
    }
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <div className={`${variable == true ? styles.hide : ''}`}>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary" onClick={() => { addBtn(true) }}>添加商品</Button>
            </div>
            <div className={`${variable == true ? '' : styles.hide}`}>
                <div style={{ fontSize: 25, marginBottom: 10 }}>添加商品</div>
                <div>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Tab 1" key="1" disabled >
                            Content of Tab Pane 1
                         </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled >
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3" disabled >
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Tab 4" key="4" disabled >
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>

                <Add></Add>
            </div>
        </div>
    )
}

export default Goods
