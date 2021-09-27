import React, { useState } from 'react'
import { Upload, Modal, Button } from 'antd';

interface Props {
    passkey: (keys: string) => void,
    passimg: (keys: string) => void,
}

const Media = (props: Props) => {
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
        console.log(fileList[0]);
    };
    const { fileList, previewTitle } = state;
    let passOn = () => {
        let keys = '3'
        props.passkey(keys)
        // props.passimg(img)
    }
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
                <Button style={{ marginRight: 20 }}>取消</Button>
                <Button type="primary" onClick={passOn}>确定</Button>
            </div>
        </div>
    )
}

export default Media
