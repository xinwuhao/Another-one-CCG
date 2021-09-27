import React from 'react'
import E from 'wangeditor'

const Details = () => {
    const editor = new E('#div1')
    editor.create()

    return (
        //商品详细
        <div>
            <div id="div1">
                <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
            </div>
        </div>
    )
}

export default Details
