import React, { useState, useEffect } from 'react'
import { Input, Button, Tabs, Form } from 'antd';
import E from 'wangeditor'
import styles from './add.less'
import Basics from '@/components/addgoods/basics/basics'
import Media from '@/components/addgoods/media/media';
import Norms from '@/components/addgoods/norms/norms'
import Details from '@/components/addgoods/details/details'

const { Search } = Input;
const { TabPane } = Tabs;

interface Props {
    luse: (key: boolean) => void,
    discount: (key: any) => void
}

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    let [variable, setVariable] = useState<boolean>(false)
    let [keys, setKeys] = useState<string>('1')
    //添加按钮
    let addBtn = (item: boolean) => {
        setVariable(item)
    }
    //标签栏
    let callback = (key: any) => {
        console.log(key);
    }
    let pass4 = (val: any) => {
        setKeys(val)
    }
    let passOn = (val: string) => {
        setKeys(val)
    }
    let passkey = (val: string) => {
        setKeys(val)
    }
    let luse = (val: boolean) => {
        setVariable(val)
    }

    let [img, setimg] = useState<string>('')
    let [arr, setArr] = useState<any>([])
    let [list, setList] = useState<any>([])
    let [count, setCount] = useState<any>([])
    let [obj, setObj] = useState<any>([])

    //获取的值
    let passimg = (val: any) => {
        console.log(val);
        setimg(val)
    }
    let value1 = (val: any) => {
        console.log(val);
        setObj(val)
    }
    //标签3
    let list3 = (val: any) => {
        console.log(val);
        setList(val)
    }
    let arr3 = (val: any) => {
        console.log(val);
        setArr(val)
    }
    //标签4
    let [form] = Form.useForm()
    let [editor, setEditor] = useState<any>()
    let [discount, setDidscount] = useState<any>()
    let onFinish = () => {
        console.log(discount);
        let luse = false
    }
    //进入执行
    useEffect(() => {
        if (!editor) {
            let editor1 = new E(document.getElementById('div1'))
            editor1.create()
            setEditor(editor1)
            editor1.config.onchange = function (newHtml: any) {
                discount = newHtml
                setDidscount(discount)
                form.setFieldsValue({ detail: discount })
            }
        }
    }, [])
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
                            <Basics passOn={passOn} value={value1}></Basics>
                        </TabPane>
                        <TabPane tab="媒体信息" key="2" disabled >
                            <Media passkey={passkey} passimg={passimg}></Media>
                        </TabPane>
                        <TabPane tab="商品规格" key="3" disabled >
                            <Norms pass4={pass4} list3={list3} arr3={arr3}></Norms>
                        </TabPane>
                        <TabPane tab="商品详情" key="4" disabled >
                            <Details luse={luse} discount={discount}></Details>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Goods
