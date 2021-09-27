import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Select, Form, Checkbox } from 'antd';
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
    let [spec, setSpec] = useState<any>([])
    let onValuesChange = (val: any) => {
        api.getSpec({ parentId: val.model }).then((res: any) => {
            if (res.code == 200) {
                res.data.map((item: any) => {
                    item.checkList = []
                })
                setSpec(res.data)
            }
        })
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
                <div>商品规格:</div>
                <div>
                    {
                        spec.length ? <div>
                            {spec.map((item: any) => {
                                return (
                                    <div key={item._id}>
                                        <div>
                                            <div>
                                                <Checkbox
                                                    checked={item.checkList!.length == item.spec_item.length}
                                                    onChange={(e) => changeAllcCheck(e, item)} />
                                            </div>
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                {item.spec_item.length ? item.spec_item.map((i: string) => {
                                                    return (
                                                        <div key={i}>
                                                            <div>
                                                                <Checkbox
                                                                    checked={item.checkList!.includes(i)}
                                                                    onChange={(e) => changeCheck(e, i, item)} />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default Norms
