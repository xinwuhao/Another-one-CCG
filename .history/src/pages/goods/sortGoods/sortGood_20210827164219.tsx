import React, { useState, useEffect } from 'react'
import { Form, Input, Tree, Select } from 'antd';
import { useSelector, useDispatch } from 'umi'
import styles from './sort.less'


const { Option } = Select;
const { DirectoryTree } = Tree;
let { Search } = Input;

const sortGood = () => {
    let list = useSelector((state: any) => state.sort.list)
    let dispatch = useDispatch()
    let [secondary, setSecondary] = useState<string>('')
    let [sortName, setSortName] = useState<string>('')
    //输入框
    const onSearch = (value: any) => console.log(value);

    const [form] = Form.useForm();
    //获取数据
    let obtain = () => {
        dispatch(({
            type: 'sort/getCategory',
            payload: ''
        }))
    }
    //获取输入框的值 确定按钮发送请求 
    const onFinish = () => {
        const values = form.getFieldsValue();
        //添加一级分类
        if (secondary == '') {
            dispatch(({
                type: 'sort/addCategory',
                payload: {
                    name: values.name,
                    short_name: values.short_name
                }
            }))
            obtain()
        } else {
            //添加二级分类
            dispatch(({
                type: 'sort/addSecondCategory',
                payload: {
                    name: values.name,
                    parentId: secondary
                }
            }))
            obtain()
        }
    };

    //下拉选中的值
    let onChange = (item: any) => {
        secondary = item
        setSecondary(secondary)
    }
    //删除
    let reduce = (item: any) => {
        dispatch(({
            type: 'sort/delCategory',
            payload: item
        }))
        obtain()
    }
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 20 }}>
            <Search placeholder="输入分类名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <div style={{ display: 'flex', paddingTop: '10px' }}>
                <div style={{ width: '60%', padding: '10px' }}>
                    <div>
                        <DirectoryTree
                            multiple
                            defaultExpandAll
                            treeData={list}
                            titleRender={(item) => {
                                return (
                                    <div className={`${styles.box}`}>
                                        <div style={{ height: 25 }}>{item.title}</div>
                                        <div>{item.isLeaf == true ? <div></div> :
                                            <div style={{ position: 'absolute', right: 10, display: 'flex' }}>
                                                <div
                                                    className={`${styles.box1}`}
                                                    style={{
                                                        padding: '0px 10px',
                                                        fontWeight: 700
                                                    }}>新增</div>
                                                <div
                                                    className={`${styles.box1}`}
                                                    style={{
                                                        padding: '0px 10px',
                                                        fontWeight: 700
                                                    }}>禁用</div>
                                                <div
                                                    className={`${styles.box1}`}
                                                    onClick={() => { reduce(item.key) }}
                                                    style={{
                                                        padding: '0px 10px',
                                                        fontWeight: 700
                                                    }}>删除</div>
                                            </div>
                                        }</div>
                                    </div>
                                )
                            }}
                        />
                    </div>
                </div>
                {/* 添加分类 */}
                <div style={{ width: '40%', backgroundColor: '#F5F5F5', border: '1px solid #DCDCDC', padding: '0px 10px 10px 0px', }}>
                    <div style={{
                        display: 'flex',
                        backgroundColor: 'white',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ fontWeight: 700, padding: 10 }}>新增分类</div>
                        <div style={{ color: '#1E90FF', padding: 10 }} onClick={onFinish}>确定</div>
                    </div>
                    <div style={{ width: '100%', height: 1, backgroundColor: '#DCDCDC' }}></div>
                    <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
                        <div>
                            <Form form={form} name="真长" onFinish={onFinish} autoComplete="off" preserve={false}>
                                <Form.Item
                                    label="分类名称"
                                    name="name"
                                    initialValue={sortName}
                                    rules={[{ required: true, message: '分类不能为空' }]}
                                >
                                    <Input placeholder="请输入分类名称" />
                                </Form.Item>
                                {/* 下拉框 */}
                                <Form.Item name="area" label="上级分类" >
                                    <Select
                                        showSearch
                                        allowClear={true}
                                        placeholder="请选择上级分类"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                    >
                                        {list && list.map((item: any, index: number) => {
                                            return (
                                                <Option key={index} value={item.key}>{item.title}</Option>
                                            )
                                        })}
                                    </Select>,
                                </Form.Item>
                                <Form.Item
                                    label="分类别名"
                                    name="short_name"
                                >
                                    <Input placeholder="请输入分类别名" />
                                </Form.Item>
                            </Form>
                            <div style={{ width: '100%', height: 100 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sortGood