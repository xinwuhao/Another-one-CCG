import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Select, Form, Checkbox, Tag } from 'antd';
import { check } from 'prettier';
import api from '@/http/api'

const { Option } = Select;

const Norms = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let dispatch = useDispatch()
    const [form] = Form.useForm();
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
        console.log(e, item);
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
            item.checjList.push(i)
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
    let [spec, setSpec] = useState<any>([])

    let onValuesChange = (val: any) => {
        // console.log(val);
        api.getSpec({ parentId: val }).then((res: any) => {
            console.log(res);
            if (res.data.code == 200) {
                res.data.data.map((item: any) => {
                    item.checkList = []
                    item.spec_item = item.spec_item.split("\n")
                })
                setSpec(res.data.data)
                // console.log(spec);
                console.log(res.data.data);
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
                        onChange={onValuesChange}
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
                <div style={{ marginRight: 10 }}>????????????:</div>
                <div>
                    {
                        spec.length ? <div>
                            {spec.map((item: any) => {
                                return (
                                    <div key={item._id}>
                                        <div>
                                            <div style={{ display: 'flex' }}>
                                                <div>
                                                    <Checkbox
                                                        checked={item.checkList!.length == item.spec_item.length}
                                                        onChange={(e) => changeAllcCheck(e, item)} />
                                                </div>
                                                <div style={{ marginLeft: 10 }}>
                                                    {item.name}
                                                </div>
                                            </div>
                                            <div style={{ marginLeft: 20 }}>
                                                {item.spec_item.length ? item.spec_item.map((i: string) => {
                                                    return (
                                                        <div key={i} style={{ display: 'flex' }}>
                                                            <div>
                                                                <Checkbox
                                                                    checked={item.checkList!.includes(i)}
                                                                    onChange={(e) => changeCheck(e, i, item)} />
                                                            </div>
                                                            <Tag style={{ padding: '0px 10px', marginLeft: 10 }}>{i}</Tag>
                                                        </div>
                                                    )
                                                }) : null}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Norms
