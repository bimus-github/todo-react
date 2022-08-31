import { DeleteOutlined } from '@ant-design/icons';
import { List, Popconfirm, Typography } from 'antd';
import React, { useState } from 'react';

const { Text } = Typography;

const Todo = (props) => {
  const { idx, item, handleRemoveTodo } = props;

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    handleRemoveTodo();

    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <List.Item>
      <List.Item.Meta title={<Text strong>{`${idx + 1}. ${item}`}</Text>} />

      <Popconfirm
        title="Are you sure delete this todo?"
        visible={visible}
        onConfirm={() => handleOk(idx)}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <DeleteOutlined onClick={showPopconfirm} style={{ color: 'red' }} />
      </Popconfirm>
    </List.Item>
  );
};

export default Todo;
