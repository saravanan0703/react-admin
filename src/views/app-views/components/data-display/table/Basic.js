import React, { Component, useEffect, useState } from "react";
import { Table, Divider, Tag, Input, Button, Form,InputNumber, Popconfirm,message, Modal, Select } from "antd";
import { EyeOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

import axios from "axios";
import { Option } from "antd/lib/mentions";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Utils from "utils";
import Right from "../timeline/Right";
import { useHistory } from "react-router-dom";

const { Search } = Input;

function Basic(){



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
    const api = await axios.get(`http://lara.localhost/api/users-lists?page=${pageNumber}&search=${search}&sort=${sort}&order=${order}`).then(res =>{
      console.log(res.data)
        setData({
          users:  res.data.datas.data
      });
      settotalPages(res.data.datas.total)
      setperPage(res.data.datas.per_page)
      currentPage(res.data.datas.current_page)
      
    })
    let userDetails = JSON.parse(localStorage.getItem('user_id'));
    console.log(userDetails);
  
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
    title: 'Name',
    dataIndex: 'name',
    editable: true,
    render: (_, record) => (
      <div className="d-flex">
        <AvatarStatus size={40} type="circle" src={`http://lara.localhost/${record.images}`} name={record.name}/>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    editable: true,

  },
  {
    title: "Role",
    dataIndex: "role",
    editable: true,    
    key:"role",
    filters: [
      {
        text: 'Admin',
        value: 'admin',
      },
      {
        text: 'Single',
        value: 'single',
      },
    ],
    render: role => (
      <Tag className ="text-capitalize" color={role === 'admin'? 'cyan' : 'red'}>{role}</Tag>
    ),
    onFilter: (value, record) => record.role.indexOf(value) === 0,
    sorter: (a, b) => a.role.length - b.role.length,
    sortDirections: ['descend', 'ascend'],
  },


  {
    title: "Status",
    dataIndex: "status",
    key:"status",
    filters: [
      {
        text: 'Active',
        value: 'active',
      },
      {
        text: 'De-Active',
        value: 'deactive',
      },
    ],
    render: status => (
      <Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
    ),
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
    sortDirections: ['descend', 'ascend'],
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

const onDeleteUser=(record)=>{    
        
        axios.delete(`http://lara.localhost/api/delete-user/${record.id}`,
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




const updateuser = async (record) => {
//  e.preventDefault();

  //const user_id = this.props.match.params.id;
  const data = editingUser;
  console.log(data);
  
  await axios.post(`http://lara.localhost/api/update-user/${data.id}`,data).then(res => {
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
  history.push(`/app/components/add-data/user/create`)
}

    return <div>
        <Search
            placeholder=" Search For Name Users.."
            onChange={e=>{
              setSearch(e.target.value);
              fetchData();
            }}
            style={{ width: 200 }}
        />
        <Button onClick={addUser} style={{width:200,float:"right" }} type="primary" icon={<PlusCircleOutlined />} block>Add User</Button>

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
          title = "Edit Users"
          visible = {isEditing}
          okText="Save"
          onCancel= {()=>{
            setEditing(false)
          }}
          onOk={updateuser}
          >
        <Form.Item
        label="Email"
        rules={[{ 
                required: true, 
                message: 'Please input your Email!' 
              },
              {
              type: 'email',
              message: 'Please enter a validate email!'}
            ]}
         >
         <Input 
          name="email"
          value={editingUser?.email}
          onChange={(e)=>
          {
            setEditingUser((pre)=>{
              return {...pre,email: e.target.value}
            })
          }}
          />
          </Form.Item>
          <Form.Item  label="Role" rules={[{ required: true }]} >
         <Select
        value={editingUser?.role}
        style={{
          width: 80,
        }}
        onChange = {(e)=>
        {
          console.log(e)
          setEditingUser((pre)=>{
            return {...pre,role: e}
          })
        }}
      >
        <Option value="admin">Admin</Option>
        <Option value="single">Single</Option>
      </Select>
      </Form.Item>
        <Form.Item
        label="Name"
        rules={[{ 
                required: true, 
                message: 'Please input your Name!' 
              }]}
         >
         <Input 
          name="name"
          value={editingUser?.name}
          onChange={(e)=>
            {
              setEditingUser((pre)=>{
                return {...pre,name: e.target.value}
              })
            }}
          />
          </Form.Item>
          <Input 
          type="hidden"
           name="password"
           value={editingUser?.password}
           onChange={(e)=>
             {
               setEditingUser((pre)=>{
                 return {...pre,password: e.target.value}
               })
             }}
           />
          <Form.Item  label="Status" rules={[{ required: true }]} >
         <Select
        value={editingUser?.status}
        style={{
          width: 80,
        }}
        onChange = {(e)=>
        {
          console.log(e)
          setEditingUser((pre)=>{
            return {...pre,status: e}
          })
        }}
      >
        <Option value="active">Active</Option>
        <Option value="deactive">Deactive</Option>
      </Select>
      </Form.Item>
          </Modal>
        </Form>
  </div>
}

export default Basic;
