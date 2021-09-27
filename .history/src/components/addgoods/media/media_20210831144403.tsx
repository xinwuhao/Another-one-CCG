import React, { useState } from 'react'
import { Upload, Modal, Button } from 'antd';

const Media = () => {
    let [state, setState] = useState<any>({
        previewImage: '',
        previewTitle: '',
        fileList: []
    })
    let [previewVisible, setPreviewVisible] = useState<boolean>(false)
    //预览层
    let handleCancel = () => { setPreviewVisible(false) }
    //预览图片
    let [img, setImg] = useState<string>('')
    let handlePreview = async (file: any) => {
        setImg(file.response.data)
        setPreviewVisible(true)
    }
    //上传
    let handleChange = ({ fileList }: { fileList: any }) => {
        setState({ fileList })
    };
    const { fileList, previewTitle } = state;
    return (
        //媒体
        <div>
            <Upload
                action="http://localhost:7001/admin/upload"
                headers={{ Authorization: localStorage.getItem('token')! }}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                <div style={{ color: '#1E90FF' }}>上传图片</div>
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={img} />
            </Modal>
            <div style={{ width: '100%', height: 1, backgroundColor: '#D3D3D3', margin: '20px 0px' }}></div>
            <div>
                <Button style={{ margin: '0px 20px' }}>取消</Button>
                <Button type="primary">确定</Button>
            </div>
        </div>
    )
}

export default Media
