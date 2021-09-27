import React, { useState, useEffect } from 'react'
import E from 'wangeditor'
import { Form, Button } from 'antd';

const Sparameters = () => {
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
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
            <Form name="validate_other" onFinish={onFinish} form={form} preserve={false}>
                <Form.Item name="div1">
                    <div id="div1"></div>
                </Form.Item>
                <Form.Item name="div1">
                    <div id="div1"></div>
                </Form.Item>
                <Form.Item name="button">
                    <Button type="primary" htmlType="submit" >确定</Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Sparameters
