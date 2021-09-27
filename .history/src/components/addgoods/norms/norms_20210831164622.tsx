import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Select, Form, Checkbox } from 'antd';
import { check } from 'prettier';

const { Option } = Select;

const Norms = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let list = useSelector((state: any) => state.norms.list)
    let dispatch = useDispatch()
    const [form] = Form.useForm();
    let onChange = (item: any) => {
        console.log(item);
        dispatch(({
            type: 'norms/getSpec',
            payload: {
                parentId: item
            }
        }))
    }
    const onFinish = () => {
        const values = form.getFieldsValue();
        console.log(values);
    };
    let goodsModel = () => {
        dispatch(({
            type: 'Model/getModel',
            payload: {
                current: 1,
                pageSize: 99999,
                query: ''
            }
        }))
    }
    let changeAllcCheck = (e: any, item: any) => {
        if (e.target.checked) {
            item.checkList = [...item.spec]
        }
    }
    let [checkSpec, setCheckedSpec] = useState<string[]>([])
    let changeCheck = (e: any, i: string, item: any) => {
        let arr: string[] = []
        if (e.target.checked) {
            item.checkde.push(i)
            arr.push(i)
            item.checjList
            setCheckedSpec([...checkedSpec, ...arr])
        } else {
            item.checkList = item.checkList!.filter(S => s !== 1)
            let arr: string[] = []
            arr = checkedSpec.filter(S => s !== i)
            setCheckedSpec(arr)
        }
    }
    useEffect(() => {
        goodsModel()
    }, [])
    //商品规格
    return (
        <div>
            <Form form={form} name="name" preserve={false} onFinish={onFinish}>
                {/* 下拉框 */}
                <Form.Item name="area" label="所属模型" >
                    <Select
                        showSearch
                        allowClear={true}
                        placeholder="请选所属模型"
                        style={{ width: 400 }}
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        {topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </Form.Item>
            </Form>
            <div style={{ display: 'flex' }}>
                <div>商品规格:</div>
                <div style={{ marginLeft: 10 }}>
                    {list.data && list.data.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <div>
                                    <Checkbox
                                    >{item.mode}</Checkbox>
                                </div>
                                <div style={{ display: 'flex', marginLeft: 10 }}>{item.spec_item.split("\n").map((item1: any, index1: number) => {
                                    return (
                                        <div key={index1}>
                                            <div style={{ margin: 10 }}>
                                                <Checkbox
                                                    checked={item.checkList!.includes(item1.mode)}
                                                    onChange={(e) => changeCheck(e, item1.mode, item)}
                                                >{item1}</Checkbox>
                                            </div>
                                        </div>
                                    )
                                })}</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Norms
