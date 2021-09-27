import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table

const Navigation = () => {
    let list = useSelector((state: any) => state.data.list)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)//判断添加？编辑？

    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    // 输入框方法
    let onSearch = (value: any) => {
        console.log(value);
    };//输入框的值
    //添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };

    //上传图片
    let [previewVisible, setpreviewVisible] = useState<boolean>(false)
    let [name, setName] = useState<string>('')
    let [url, setUrl] = useState<string>('')
    let [url1, setUrl1] = useState<string>('')
    let [id, setId] = useState<string>('')
    //上传图片方法
    let handleChange = (fileList: any) => {
        console.log(fileList.file.response);
        if (fileList.file.response) {
            url1 = fileList.file.response.data
            setUrl1(url1)
        }
        // console.log(url1);
    }
    //预览图片弹出层关闭
    let handleCancel1 = () => {
        setpreviewVisible(!previewVisible)
    }
    //预览图片
    let onPreview = async (file: any) => {
        setpreviewVisible(!previewVisible);
        setName(file.name)
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        setUrl(src)
    }
    let [img, setImg] = useState<string>('')
    //编辑
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        setImg(item.link)
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log(values);
        if (estimate == 1) {
            //添加
        } else {
            //删除
            setImg('')
        }
    }
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    let [pageSize, setPageSize] = useState<number>(10)
    let [query, setQuery] = useState<string>('')
    let [current, setCurrent] = useState<number>(1)
    //获取展示数据
    let obtain = () => {

    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
    }
    //显示隐藏
    let Change = (item: any) => {
        console.log(item);
    }
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
    return (
        <div>
            导航管理
        </div>
    )
}

export default Navigation
