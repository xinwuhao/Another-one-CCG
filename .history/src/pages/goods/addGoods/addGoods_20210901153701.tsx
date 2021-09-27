import React, { useState } from 'react'
import { Input, Button, Tabs } from 'antd';
import { useSelector, useDispatch } from 'umi'
import styles from './add.less'
import Basics from '@/components/addgoods/basics/basics'
import Media from '@/components/addgoods/media/media';
import Norms from '@/components/addgoods/norms/norms'
import Details from '@/components/addgoods/details/details'

const { Search } = Input;
const { TabPane } = Tabs;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    let [variable, setVariable] = useState<boolean>(false)
    let [keys, setKeys] = useState<string>('1')
    //添加按钮
    let addBtn = (item: boolean) => {
        setVariable(item)
    }
    //标签栏
    let callback = (key: any) => {
        console.log(key);
    }
    let pass4 = (val: any) => {
        setKeys(val)
    }
    let passOn = (val: string) => {
        setKeys(val)
    }
    let passkey = (val: string) => {
        setKeys(val)
    }
    let luse = (val: boolean) => {
        setVariable(val)
    }

    let [img, setimg] = useState<string>('')
    let [arr, setArr] = useState<any>([])
    let [list, setList] = useState<any>([])
    let [count, setCount] = useState<any>([])
    let [obj, setObj] = useState<any>([])
    let [img1, setimg1] = useState<any>([])
    //获取的值
    let passimg = (val: any) => {
        img = val
        setimg(img)
        // console.log(img);
    }
    let value1 = (val: any) => {
        // console.log(val);
        obj = val
        setObj(obj)
        obj.cover.map((item: any) => {
            img1.push(item.response.data)
            setimg1(img1)
        })
        // console.log(img1);
    }
    //标签3
    let list3 = (val: any) => {
        list = val
        setList(list)
        // console.log(list);
    }
    let arr3 = (val: any) => {
        arr = val
        setArr(arr)
        // console.log(arr);
    }
    //标签4
    let discount = (val: any) => {
        count = val
        setCount(count)
        // console.log(count)
        setKeys('1')
        addition()
    }
    let addition = () => {
        dispatch(({
            type: 'add/addGoods',
            payload: {
                isShow: true,
                productionDesc: '',
                category: obj.category,
                discount: '',
                comment: '',
                cover: img1[0],
                detail: count,
                video: '',
                pic: img,
                spec: list,
                stock: obj.stock,
                company: obj.company,
                isNewGood: obj.isNewGood,
                presentPrice: obj.presentPrice,
                sellDesc: obj.productionDesc,
                isHot: obj.hot,
                name: obj.name,
                originalPrice: obj.originalPrice,
                introduction: obj.introduction,
                isRecommend: obj.isRecommend,
            }
        }))
    }
    let topics = useSelector((state: any) => state.add.topics)
    let dispatch = useDispatch()
    let [pageSize, setPageSize] = useState<number>(10)
    let [current, setCurrent] = useState<number>(1)
    let obtain = () => {
        dispatch(({
            type: 'add/getGoods',
            payload: {
                current: current,
                pageSize: pageSize,
                query: ''
            }
        }))
    }
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <div className={`${variable == true ? styles.hide : ''}`}>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary" onClick={() => { addBtn(true) }}>添加商品</Button>
            </div>
            <div className={`${variable == true ? '' : styles.hide}`}>
                <div style={{ fontSize: 25, marginBottom: 10 }}>添加商品</div>
                <div>
                    <Tabs defaultActiveKey="1" onChange={callback} activeKey={keys}>
                        <TabPane tab="基础设置" key="1" disabled >
                            <Basics passOn={passOn} value={value1}></Basics>
                        </TabPane>
                        <TabPane tab="媒体信息" key="2" disabled >
                            <Media passkey={passkey} passimg={passimg}></Media>
                        </TabPane>
                        <TabPane tab="商品规格" key="3" disabled >
                            <Norms pass4={pass4} list3={list3} arr3={arr3}></Norms>
                        </TabPane>
                        <TabPane tab="商品详情" key="4" disabled >
                            <Details luse={luse} discount={discount}></Details>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Goods
