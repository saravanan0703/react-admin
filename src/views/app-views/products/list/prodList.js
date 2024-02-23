import React, { Component, useEffect, useState } from "react";
import { Table, Divider, Tag, Input, Button, Form,InputNumber, Popconfirm,message, Modal, Select } from "antd";
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

import axios from "axios";
import { Option } from "antd/lib/mentions";
import AvatarStatus from "components/shared-components/AvatarStatus";

import { useHistory } from "react-router-dom";
const { Search } = Input;

function Prodlists(){



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
    const api = await axios.get(`http://lara.localhost/api/product-lists?page=${pageNumber}&search=${search}&sort=${sort}&order=${order}`).then(res =>{
      console.log(res.data.datas.data)
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
  


const columns = [
  {
    title: "ID",
    dataIndex: "id",
   // defaultSortOrder: 'ascend',
    sorter: (a, b) => a.id - b.id, 
   // render: text => <a href="/#">{text}</a>
  },
  {
    title: 'Product Name',
    dataIndex: 'pname',
    editable: true,
    render: (_, record) => (
      <div className="d-flex">
        <AvatarStatus size={40} type="circle" src={`http://lara.localhost/${record?.image}`} name={record.pname}/>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    editable: true,

  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    editable: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    editable: true,
    filters: [
      {
        text: 'Available',
        value: 'available',
      },
      {
        text: 'Unvailable',
        value: 'unavailable',
      },
    ],
    render: status => (
      <Tag className ="text-capitalize" color={status === 'available'? 'cyan' : 'red'}>{status}</Tag>
    ),
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: "Desription",
    dataIndex: "desc",
    key: "desc",
    editable: true,
  },
 /* {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags?.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },*/
  {
    title: "Action",
    key: "action",
    render: (record) => {   
        return <>
          <a onClick={()=>{
            onEditUser(record)
          }}>Edit</a>
          <Divider type="vertical" />
          <a onClick={()=>{
            onViewUser(record)
          }}>View Product</a>
          <Divider type="vertical" />
            <Popconfirm title="Sure to delete?" onConfirm={() => {
              onDeleteUser(record)
            }}>
              <a>Delete</a>
            </Popconfirm>
         </>
       
    },

  }
];

const onEditUser = (record)=>{
setEditing(true);
setEditingUser({...record})
};
const onViewUser = (record)=>{
  setViewing(true);
  setViewingUser({...record})
  };
const onDeleteUser=(record)=>{    
        
        axios.delete(`http://lara.localhost/api/delete-product/${record.id}`,
        {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-xsrf-token',
            }
        }
            ).then(res=>{
              console.log(res.data.datas)
              if(res.data.status ==="success")
              {
                message
                .loading('Deleting is in progress..',2)
                .then(() => message.success(res.data.datas, 2))
                .then(()=>fetchData(current));
                

              
              }
              else if(res.data.status === "failed")
              {
                message
                .loading('Deleting is in progress..', 2.5)
                .then(() => message.danger(res.data.datas, 2.5))
                .then(()=>fetchData(current));

              }
          
          });
 
        
}
const userDetails = localStorage.getItem('user_id');


const onBuy = async (record) => {
  //  e.preventDefault();
  
    //const user_id = this.props.match.params.id;
    const userDetails = localStorage.getItem('user_id');
    const data = viewingUser;
    console.log(viewingUser);
    
    await axios.post(`http://lara.localhost/api/orders/create?&user_id=${userDetails}`,data).then(res => {
      console.log(res)
        if(res.data.status === "success")
        {			
          history.push(`/app/order/${res.data.datas.id}`);			
        }
        else if(res.data.status === "failed")
        {
  
        }
  
    });
  }


const updateuser = async (record) => {
//  e.preventDefault();

  //const user_id = this.props.match.params.id;

  const data = editingUser;
  console.log(data);
  
  await axios.put(`http://lara.localhost/api/update-product/${data.id}`,data).then(res => {
      if(res.data.status === "success")
      {
        fetchData(current);  //Page number should include
        setEditing(false);  
      }
      else if(res.data.status === "failed")
      {
        setEditing(false);  

      }

  });
}


const datas = ""

let history = useHistory();
const addUser = () => {
  history.push(`/app/products/create`)
}

    return <div>
        <Search
            placeholder=" Search For Products.."
            onChange={e=>{
              setSearch(e.target.value);
              fetchData();
            }}
            style={{ width: 200 }}
        />
        <Button onClick={addUser} style={{width:200,float:"right" }} type="primary" icon={<PlusCircleOutlined />} block>Add Product</Button>

        <Form>
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
          <Modal
          title = "Edit Product"
          visible = {isEditing}
          okText="Save"
          onCancel= {()=>{
            setEditing(false)
          }}
          onOk={updateuser}
          >
        <Form.Item
        label="Product Name"
        rules={[{ 
                required: true, 
                message: 'Please input your Name!' 
              },
            ]}
         >
           
         <Input 
          name="pname"
          value={editingUser?.pname}
          onChange={(e)=>
          {
            setEditingUser((pre)=>{
              return {...pre,pname: e.target.value}
            })
          }}
          />
          </Form.Item>
          <Form.Item  label="Status" rules={[{ required: true }]} >
         <Select
        value={editingUser?.status}
        style={{
          width: 120,
        }}
        onChange = {(e)=>
        {
          console.log(e)
          setEditingUser((pre)=>{
            return {...pre,status: e}
          })
        }}
      >
        <Option value="available">Available</Option>
        <Option value="unavailable">Unavailable</Option>
      </Select>
      </Form.Item>
        <Form.Item
        label="Price"
        rules={[{ 
                required: true, 
                message: 'Please input your Price!' 
              }]}
         >
         <Input 
          name="name"
          value={editingUser?.price}
          onChange={(e)=>
            {
              setEditingUser((pre)=>{
                return {...pre,price: e.target.value}
              })
            }}
          />
          </Form.Item>
        <Form.Item  label="Category" rules={[{ required: true }]} >
         <Select
        value={editingUser?.category}
        style={{
          width: 120,
        }}
        onChange = {(e)=>
        {
          console.log(e)
          setEditingUser((pre)=>{
            return {...pre,category: e}
          })
        }}
      >
        <Option value="electronics">Electronics</Option>
        <Option value="fashion">Fashion</Option>
      </Select>
      </Form.Item>
      </Modal>
      <Modal
          title = "View Product"
          visible = {isViewing}
          okText="Buy"
          onCancel= {()=>{
            setViewing(false)
          }}
          onOk={onBuy}
          >
        
        <Form.Item
        label="Product No."
        rules={[{ 
                required: true, 
                message: 'Please input your Name!' 
              },
            ]}
         >
        <Input  name="id" value={viewingUser?.id} disabled={true}/>
        </Form.Item>
        <Form.Item
        label="Product Name"
        rules={[{ 
                required: true, 
                message: 'Please input your Name!' 
              },
            ]}
         >
         <Input 
          name="pname"
          value={viewingUser?.pname}
          disabled={true}
          />
          </Form.Item>
          <Form.Item  label="Status" rules={[{ required: true }]} >
         <Select
        value={viewingUser?.status}
        style={{
          width: 120,
        }}
        disabled={true}
      >
        <Option value="available">Available</Option>
        <Option value="unavailable">Unavailable</Option>
      </Select>
      </Form.Item>
        <Form.Item
        label="Price"
        rules={[{ 
                required: true, 
                message: 'Please input your Price!' 
              }]}
         >
         <Input 
          name="name"
          value={viewingUser?.price}
          disabled={true}
          />
          </Form.Item>
          <Form.Item  label="Category" rules={[{ required: true }]} >
         <Select
        value={viewingUser?.category}
        style={{
          width: 120,
        }}
        disabled={true}
      >
        <Option value="electronics">Electronics</Option>
        <Option value="fashion">Fashion</Option>
      </Select>
      </Form.Item>
      </Modal>
        </Form>
  </div>
}

export default Prodlists;
