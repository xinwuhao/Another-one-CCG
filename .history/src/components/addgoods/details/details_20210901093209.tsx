import React, { useState, useEffect } from 'react'
import E from 'wangeditor'
import { Form } from 'antd';

const Details = () => {
    let [form] = Form.useForm()
    let [editor, setEditor] = useState<any>()
    let [discount, setDidscount] = useState<any>()
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
            <div id="div1">
                
            </div>
        </div>
    )
}

export default Details
