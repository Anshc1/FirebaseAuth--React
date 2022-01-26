import React from 'react';
import {Breadcrumb} from 'react-bootstrap'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
function Centre() {
    return <div>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <FolderOpenIcon/>
    </div>;
}

export default Centre;
