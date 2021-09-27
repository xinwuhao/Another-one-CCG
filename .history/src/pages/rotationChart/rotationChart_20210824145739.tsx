import React, { useState } from 'react'
import { Input, Space, Modal, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    // 输入框
    let { Search } = Input;
    let suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    let onSearch = (value: any) => {
        console.log(value)
    };
    // 添加
    let [state, setState] = useState<any>({ modal2Visible: false })
    let setModal2Visible = (modal2Visible: boolean) => {
        setState({ modal2Visible });
    }
    return (
        <div>
            <div>
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div>
                <Button type="primary" onClick={() => setModal2Visible(true)}>
                    添加轮播图
                </Button>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={state.modal2Visible}
                    onOk={() => setModal2Visible(false)}
                    onCancel={() => setModal2Visible(false)}
                >
                    <div>123</div>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
