import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Button, Table, Space, Switch, Modal, Form } from 'antd';

let { Search } = Input;
const { Column, ColumnGroup } = Table

const normsGoods = () => {
    return (
        <div style={{ width: "100%", backgroundColor: 'white', padding: 10 }}>

            商品规格
        </div>
    )
}

export default normsGoods
