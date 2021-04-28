import styles from './App.less';
import {Table} from 'antd';

function App() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      with:100
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      with:200
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      with:300
    },
  ];
  
  return <div className={styles.parent}> <Table tableLayout='fixed' dataSource={dataSource} columns={columns} /> </div>;
}

export default App;
