import React, { useState } from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Media = () => {
    let [state, setState] = useState<any>({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: []
    })
    //预览层
    let handleCancel = () => { setState({ previewVisible: false }) }
    //预览图片
    let [img, setImg] = useState<string>('')
    let handlePreview = async (file: any) => {
        setImg(file.response.data)
        setState({ previewVisible: true })
    }
    //上传
    let handleChange = ({ fileList }: { fileList: any }) => {
        setState({ fileList })
    };
    const { previewVisible, fileList, previewTitle } = state;
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
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
                {/* {uploadButton} */}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={img} />
            </Modal>
        </div>
    )
}

export default Media
