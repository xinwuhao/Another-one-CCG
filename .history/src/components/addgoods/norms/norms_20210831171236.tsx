import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Select, Form, Checkbox } from 'antd';
import { check } from 'prettier';
import api from '@/http/api'

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
    let [checkedSpec, setCheckedSpec] = useState<string[]>([])
    let changeAllcCheck = (e: any, item: any) => {
        if (e.target.checked) {
            item.checkList = [...item.spec_item]
            setCheckedSpec([...checkedSpec, ...item.checkList])
        } else {
            let arr: string[] = []
            item.checkList != []
            checkedSpec.map(s => {
                let flag = true
                item.spec_item.map((i: any) => {
                    if (s == i) {
                        flag = false
                    }
                })
                if (flag) {
                    arr.push(s)
                }
            })
            setCheckedSpec([...arr])
        }
    }
    let changeCheck = (e: any, i: string, item: any) => {
        let arr: string[] = []
        if (e.target.checked) {
            item.checkde.push(i)
            arr.push(i)
            item.checjList
            setCheckedSpec([...checkedSpec, ...arr])
        } else {
            item.checkList = item.checkList!.filter((s: any) => s !== 1)
            let arr: string[] = []
            arr = checkedSpec.filter(s => s !== i)
            setCheckedSpec(arr)
        }
    }
    let onValuesChange = (val: any) => {
        api.getSpec({ parentId: val.model }).then((res: any) => {
            if (res.code == 200) {
                res.data.map((item: any) => {
                    item.checkList = []
                })
                setCheckedSpec(res.data)
            }
        })
    }
    useEffect(() => {
        goodsModel()
    }, [])
    //????????????
    return (
        <div>
            <Form form={form} name="name" preserve={false} onFinish={onFinish}>
                {/* ????????? */}
                <Form.Item name="area" label="????????????" >
                    <Select
                        showSearch
                        allowClear={true}
                        placeholder="??????????????????"
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
                <div>????????????:</div>
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
