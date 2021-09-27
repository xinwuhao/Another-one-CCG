import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import E from 'wangeditor'
import { Form, Button, Select } from 'antd';
import styles from './Sparameters.less'

const { Option } = Select;

const Sparameters = () => {
    let topics = useSelector((state: any) => state.add.list)
    let list = useSelector((state: any) => state.Spara.list)
    let dispatch = useDispatch()
    let [form] = Form.useForm()
    let [editor, setEditor] = useState<any>()
    let [discount, setDidscount] = useState<any>()
    let onFinish = () => {
        console.log(discount);
        dispatch(({
            type: 'Spara/addSpecParams',
            payload: {
                parentId: secondary,
                specParams: discount
            }
        }))
    }
    let [secondary, setSecondary] = useState<string>('')
    let onChange = (item: any) => {
        console.log(item);
        secondary = item
        setSecondary(secondary)
        dispatch(({
            type: 'Spara/getSpecParams',
            payload: {
                parentId: item
            }
        }))
    }
    //获取
    let [pageSize, setPageSize] = useState<number>(10)
    let [current, setCurrent] = useState<number>(1)
    let obtain = () => {
        dispatch(({
            type: 'add/getGoods',
            payload: {
                current: current,
                pageSize: pageSize,
                query: ''
            }
        }))
    }
    //进入执行
    useEffect(() => {
        obtain()
        if (!editor) {
            let editor1 = new E(document.getElementById('div1'))
            editor1.create()
            setEditor(editor1)
            editor1.config.onchange = function (newHtml: any) {
                discount = newHtml
                setDidscount(discount)
                form.setFieldsValue({ detail: discount })
            }
            editor1.config.zIndex = -1
        }
    }, [])
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
                <Form name="validate_other" onFinish={onFinish} form={form} preserve={false}>
                    <Form.Item name="div1" label="所属商品" >
                        <Select
                            showSearch
                            allowClear={true}
                            placeholder="请选所属商品"
                            style={{ width: 200, zIndex: 9999999999999999999 }}
                            optionFilterProp="children"
                            onChange={onChange}

                        >{topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}</Select>
                    </Form.Item>
                    {/* <Form.Item name="div1">
                        <div id="div1" style={{ zIndex: 0 }}>
                        </div>
                    </Form.Item>
                    <Form.Item name="button">
                        <Button type="primary" htmlType="submit" >确定</Button>
                    </Form.Item> */}

                </Form>
            </div>
            <div>
                <div id="div1" style={{ zIndex: 0 }}>
                </div>
                <Button type="primary" htmlType="submit" style={{position:'absolute',right:40}}>确定</Button>
            </div>
        </div>
    )
}

export default Sparameters
