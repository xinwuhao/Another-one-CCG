import React, { useState } from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Media = () => {
    let getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    let [state, setState] = useState<any>({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: []
    })
    let handleCancel = () => { setState({ previewVisible: false }) }
    let handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        // setState({
        //     previewImage: file.url || file.preview,
        //     previewVisible: true,
        //     previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        // });
    }
    let handleChange = ({ fileList }: { fileList: any }) => { setState({ fileList }) };
    const { previewVisible, previewImage, fileList, previewTitle } = state;
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
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    )
}

export default Media
