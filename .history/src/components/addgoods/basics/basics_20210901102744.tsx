import React, { useState, useEffect } from 'react'
import styles from './basics.less'
import { useSelector, useDispatch } from 'umi'
import { Form, Select, Switch, Button, Upload, Input } from 'antd';

const { Option, OptGroup } = Select;
const { TextArea } = Input;

interface Props {
    passOn: (keys: string) => void,
}

let Dasics = (props: Props) => {
    let list = useSelector((state: any) => state.sort.list)
    let dispatch = useDispatch()
    let [keys, setKeys] = useState<string>('2')
    let formItemLayout = {
        labelCol: { span: 2 }
    };
    //获取数据
    let obtain = () => {
        dispatch(({
            type: 'sort/getCategory',
            payload: ''
        }))
    }
    let normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    let onFinish = (values: any) => {
        console.log(values);
        props.passOn(keys)
    };
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
    return (
        // 基础
        <div>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                {/* 填入信息 */}
                <Form.Item
                    name="name"
                    label="商品名称"
                    rules={[{ required: true, message: '请输入名称!', }]}
                >
                    <Input />
                </Form.Item>
                {/* 下拉选择 */}
               
                <Form.Item
                    name="sort"
                    label="商品分类"
                    hasFeedback
                    rules={[{ required: true, message: '请选择商品分类!' }]}
                >
                    <Select placeholder="请选择商品分类">
                       
                            {list && list.map((item: any, index: number) => {
                                return (
                                 
                                        <OptGroup label={item.title} key={index}>
                                            <div>{
                                                item.children && item.children.map((item1: any, index1: number) => {
                                                    return (
                                                        <div key={index1}>
                                                            <Option value={item1.key}>{item1.title}</Option>
                                                        </div>
                                                    )
                                                })
                                            }</div>
                                        </OptGroup>
                                 
                                )
                            })
                            }
                     
                    </Select>
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="price"
                    label="商品原价"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <Input />
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="present_price"
                    label="商品现价"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <Input />
                </Form.Item>
                {/* 上传图片 */}
                <Form.Item
                    name="cover"
                    label="封面图"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        name="logo"
                        action="http://localhost:7001/admin/upload"
                        headers={{ Authorization: localStorage.getItem('token')! }}
                        listType="picture"
                    >
                        <div className={`${styles.upimg}`}>上传图片</div>
                    </Upload>
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="unit"
                    label="商品单位"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <Input />
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="stock"
                    label="商品库存"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="synopsis"
                    label="商品简介"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item
                    name="introduce"
                    label="推荐介绍"
                    rules={[{ required: true, message: 'Please select your favourite colors!' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="fresh" label="是否新品" valuePropName="checked">
                    <Switch />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="fiery" label="是否热销" valuePropName="checked">
                    <Switch />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="recommend" label="是否推荐 " valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 2 }}>
                    <Button style={{ marginRight: 10 }}>取消</Button>
                    <Button type="primary" htmlType="submit" >确定</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Dasics
