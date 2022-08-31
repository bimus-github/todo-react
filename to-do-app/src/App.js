import React from 'react';
import {
  Button,
  Col,
  Row,
  Input,
  Typography,
  message,
  List,
  Popconfirm,
} from 'antd';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todos.length === 10) {
      return message.error('You can only have 10 todos');
    }

    if (!newTodo.length) {
      return message.error('Please enter a todo');
    }

    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleRemoveTodo = (idx) => {
    const newTodos = [...todos];

    newTodos.splice(idx, 1);

    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row align="center" justify="center">
        <Col>
          <Input
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Basic usage"
          />
        </Col>
        <Col>
          <Button htmlType="submit" type="primary">
            Primary Button
          </Button>
        </Col>
      </Row>

      <Col style={{ padding: '10px' }}>
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item, idx) => (
            <Todo item={item} idx={idx} handleRemoveTodo={handleRemoveTodo} />
          )}
        />
      </Col>
    </form>
  );
}

export default App;
