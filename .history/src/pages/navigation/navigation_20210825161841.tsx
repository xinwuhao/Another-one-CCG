import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table

const Navigation = () => {
    let topics = useSelector((state: any) => state.addBanner.topics)
    let dispatch = useDispatch()
    return (
        <div>
            导航管理
        </div>
    )
}

export default Navigation
