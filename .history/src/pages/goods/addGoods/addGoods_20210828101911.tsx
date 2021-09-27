import React, { useState } from 'react'
import { Input, Button } from 'antd';
import Add from '@/components/goods/add/add'
import styles from './add.less'

const { Search } = Input;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    let [variable, setVariable] = useState<boolean>(false)
    let addBtn = (item: boolean) => {
        setVariable(item)
    }
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
            <Button type="primary" onClick={() => { addBtn(true) }}>添加商品</Button>
            <div className={`${variable == true ? '' : styles.hide}`}>
                <Add></Add>
            </div>
        </div>
    )
}

export default Goods
