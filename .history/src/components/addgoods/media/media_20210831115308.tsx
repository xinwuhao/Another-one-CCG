import React, { useState } from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

let getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    let [state, setState] = useState<any>({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: []
    })
}

const Media = () => {
    return (
        //媒体
        <div>
            15156
        </div>
    )
}

export default Media
