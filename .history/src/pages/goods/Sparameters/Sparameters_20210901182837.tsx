import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import E from 'wangeditor'
import { Form, Button, Select } from 'antd';

const Sparameters = () => {
    let topics = useSelector((state: any) => state.Spara.list)
    let dispatch = useDispatch()
    let [form] = Form.useForm()
    let [editor, setEditor] = useState<any>()
    let [discount, setDidscount] = useState<any>()
    let onFinish = () => {
        console.log(discount);
    }
    let [secondary, setSecondary] = useState<string>('')
    let onChange = (item: any) => {
        console.log(item);
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
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
            <Form name="validate_other" onFinish={onFinish} form={form} preserve={false}>
                <Form.Item name="div1" label="添加通知" >
                    <Select
                        showSearch
                        allowClear={true}
                        placeholder="请选所属商品"
                        style={{ width: 200 }}
                        optionFilterProp="children"
                        onChange={onChange}

                    >
                        {/* {topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })} */}
                    </Select>
                </Form.Item>
                <Form.Item name="div1">
                    <div id="div1" style={{ marginTop: 120 }}></div>
                </Form.Item>
                <Form.Item name="button">
                    <Button type="primary" htmlType="submit" >确定</Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Sparameters
