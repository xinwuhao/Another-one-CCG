import React, { useState } from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Media = () => {
    let [state, setState] = useState<any>({
        previewImage: '',
        previewTitle: '',
        fileList: []
    })
    let [previewVisible, setPreviewVisible] = useState<boolean>(false)
    //预览层
    let handleCancel = () => { }
    //预览图片
    let [img, setImg] = useState<string>('')
    let handlePreview = async (file: any) => {
        console.log(9999);
        setImg(file.response.data)
        setPreviewVisible(true)
    }
    //上传
    let handleChange = ({ fileList }: { fileList: any }) => {
        setState({ fileList })
    };
    const { fileList, previewTitle } = state;
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
                {/* {uploadButton}
                <a href="">上传</a> */}
                hhhh
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
