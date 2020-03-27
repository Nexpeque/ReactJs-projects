import React, { Component } from 'react'

class FileInput extends Component {

    render() {
        return (
            <div>
                <Input
                    type='file' label='Upload' accept='.txt'
                    buttonAfter={uploadFileButton}
                    ref={(ref) => this.fileUpload = ref}
                />
            </div>
        )
    }
}

export default FileInput;
