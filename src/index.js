import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

const App = () => {
    return (
        <div>
            <h1>Hệ Thống Thiết Kế Nút</h1>
            <Button type="primary">Nút Chính</Button>
            <Button type="secondary">Nút Phụ</Button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));