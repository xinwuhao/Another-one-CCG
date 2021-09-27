import React, { useState, useEffect } from 'react'
import E from 'wangeditor'
import { Form, Button } from 'antd';

interface Props {
    luse: (key: boolean) => void,
    discount: (key: any) => void
}

const Details = (props: Props) => {
    let [form] = Form.useForm()
    let [editor, setEditor] = useState<any>()
    let [discount, setDidscount] = useState<any>()
    let onFinish = () => {
        // console.log(discount);
        let luse = false
        props.luse(luse)
        props.discount(discount)
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
        //商品详细
        <div>
            <Form name="validate_other" onFinish={onFinish} form={form} preserve={false}>
                <Form.Item
                    name="div1"
                    label="添加详情">
                    <div id="div1"></div>
                </Form.Item>
                <Form.Item
                    name="button">
                    <Button style={{ marginRight: 10 }}>取消</Button>
                    <Button type="primary" htmlType="submit" >确定</Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Details
