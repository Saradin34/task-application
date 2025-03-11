import React from 'react';

const Chat: React.FC = () => {
    return (
        <div>
            <h3>Чат</h3>
            <div>
                <input type="text" placeholder="Введите сообщение ..." />
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Chat;