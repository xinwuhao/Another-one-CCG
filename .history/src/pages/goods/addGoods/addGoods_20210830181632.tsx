import React, { useState } from 'react'
import { Input, Button, Tabs } from 'antd';
import styles from './add.less'
import Basics from '@/components/addgoods/basics/basics'
import Media from '@/components/addgoods/media/media';
import Norms from '@/components/addgoods/norms/norms'
import Details from '@/components/addgoods/details/details'

const { Search } = Input;
const { TabPane } = Tabs;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    let [variable, setVariable] = useState<boolean>(false)
    let [keys, setKeys] = useState<string>('2')
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
                    <Tabs defaultActiveKey="1" onChange={callback} activeKey={keys}>
                        <TabPane tab="基础设置" key="1" disabled >
                            <Basics></Basics>
                        </TabPane>
                        <TabPane tab="媒体信息" key="2" disabled >
                            <Media></Media>
                        </TabPane>
                        <TabPane tab="商品规格" key="3" disabled >
                            <Norms></Norms>
                        </TabPane>
                        <TabPane tab="商品详情" key="4" disabled >
                            <Details></Details>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Goods
