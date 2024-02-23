import React, { Component, useEffect, useState } from "react";
import { Table, Divider, Tag, Input, Button, Form,InputNumber, Popconfirm,message, Modal, Select } from "antd";
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

import axios from "axios";
import { Option } from "antd/lib/mentions";
import AvatarStatus from "components/shared-components/AvatarStatus";

import { useHistory } from "react-router-dom";
const { Search } = Input;
function Prodlists(){


  const history = useHistory();

  const [state, setData] = useState({
    users: '',
  });
  const[search,setSearch] = useState("");
      
  const [order,setOrder] = useState("asc");
  
  const [sort, setSort] = useState('');

  const [totalPages, settotalPages] = useState(1);
  const [perpage, setperPage] = useState();
  const[current, currentPage] = useState();

  const[isEditing,setEditing]=useState(false);
  const[isViewing,setViewing]=useState(false);

  const[createOrder,setCreateOrder]=useState(null);
  const[viewingUser,setViewingUser]=useState(null);
  const[editingUser,setEditingUser]=useState(null);

  const [forms] = Form.useForm()
  
  const sorting =(col) => {
      setSort(col);
      
      if(order === "asc"){
          setOrder("desc")
      }
      else{
      
          setOrder("asc")
      }
      fetchData();
  };
  
  const fetchData = async(pageNumber = 1) => {
    const api = await axios.get(`http://lara.localhost/api/transactions?page=${pageNumber}&search=${search}&sort=${sort}&order=${order}`).then(res =>{
      console.log(res)
        setData({
          users:  res.data.datas.data
      });
      settotalPages(res.data.datas.total)
      setperPage(res.data.datas.per_page)
      currentPage(res.data.datas.current_page)
      
    })
    
   // console.log(api.data.datas);

  
  };
  
  useEffect(() => {
    fetchData(1);
  }, [])

  console.log(state)
  

const onViewinvoice = (record) => {
  history.push(`/app/transactions/invoice/${record.id}`)
}
const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    editable: true,
    key: "id",
    sorter: (a, b) => a.id - b.id, 

  },
  {
    title: "Product ID",
    dataIndex: "prod_id",
    key: "price",
    editable: true,

  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    editable: true,
    filters: [
      {
        text: 'Payment Completed',
        value: 'payment_completed',
      },
      {
        text: 'Payment Pending',
        value: 'payment_pending',
      },
    ],
    render: status => (
      <Tag className ="text-capitalize" color={status === 'payment_completed'? 'cyan' : 'red'}>{status}</Tag>
    ),
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: "Action",
    key: "action",
    render: (record) => {   
        return <>
          <a onClick={()=>{
            onViewinvoice(record)
          }}>View Invoice</a>
          <Divider type="vertical" />
          </>
       
    },

  }
];


    return <div>
        <Search
            placeholder=" Search For Transactions.."
            onChange={e=>{
              setSearch(e.target.value);
              fetchData();
            }}
            style={{ width: 200 }}
        />
          <Table 
              columns={columns}
              dataSource={state.users} 
              pagination={{
                pageSize:perpage,
                total:totalPages,
                onChange:(pageNumber)=>{
                    fetchData(pageNumber) 
                }
              }}
              />
        

  </div>
}

export default Prodlists;
