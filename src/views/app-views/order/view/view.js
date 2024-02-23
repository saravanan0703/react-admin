import { Button, Card, Input, Modal,Form, Radio } from 'antd';
import axios from 'axios';
import React, { useEffect, useState,Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Prodview() {
	const [setData, setDataView] = useState();
	const [setProd, setProdView] = useState();
  const[addingAddr,setAddingAddr]=useState(null);
  const[getAddr,getAddAddr]=useState();
	const[selectAddr,getSelAddr]=useState();
	const history = useHistory();

const { id } = useParams();
console.log(selectAddr)
const fetchData = async() => {
	const api = await axios.get(`http://lara.localhost/api/orders/${id}`);
	console.log(api.data);
	setDataView(api.data.orders)
	setProdView(api.data.products)
};

useEffect(() => {
	fetchData();
}, [])



const fetchAddr = async() => {
	const userDetails = localStorage.getItem('user_id');
	const api = await axios.get(`http://lara.localhost/api/address?&user_id=${userDetails}`);
	console.log(api.data);
	getAddAddr(api.data.datas)
};

useEffect(() => {
	fetchAddr();
}, [])


const [isModalVisible, setIsModalVisible] = useState(false);

const showAddress = () => {
	setIsModalVisible(true);
};

const handleOk = async () => {

		//  e.preventDefault();
			//const user_id = this.props.match.params.id;
			const userDetails = setData?.user_id;
			const data = addingAddr;
		//	console.log(viewingUser);
		
			await axios.post(`http://lara.localhost/api/add-address?&user_id=${userDetails}`,data).then(res => {
				console.log(res.data.contact.address)
					if(res.data.status === "success")
					{			
						setTimeout(() => {
							setIsModalVisible(false);		
						}, 1000);
					}
					else if(res.data.status === "failed")
					{
						setIsModalVisible(false);		
					}
		
			});
		
//	setIsModalVisible(false);
};
const handleCancel = () => {
	setIsModalVisible(false);
};

const checkout = async (e) => {
    e.preventDefault();

    //const user_id = this.props.match.params.id;
   // const userDetails = localStorage.getItem('user_id');
		const addressid = selectAddr?.id;
		const orderid = setData?.id;
		console.log(orderid);
		await axios.post(`http://lara.localhost/api/orders/address?&addr_id=${addressid}&order_id=${orderid}`).then(res => {
			console.log(res)
				if(res.data.status === "success")
				{			
					history.push(`/app/checkout/${setData?.id}`);		
				}
				else if(res.data.status === "failed")
				{
					setIsModalVisible(false);		
				}
	
		});
		

  }

		
  return (
    <div>
			<Form>
			<Card>
      <h1>Product Details:</h1>
      <h3>OrderId : {setData?.id}</h3>
			<h3>ProductId : {setData?.prod_id}</h3>
			<h3>Product Name : {setProd?.pname}</h3>
			<h3>Category : {setProd?.category}</h3>
			<h3>Status : {setProd?.status}</h3>
			<h3>Description : {setProd?.desc}</h3>
			<img src={`http://lara.localhost/${setProd?.image}`} width="100px" alt='Image'></img>

			</Card>
			<Card>
			<Button type="primary" onClick={showAddress}>+Add Address</Button>
			<br />
			<br />
			<h1>Select Address:</h1>
			<div> 
			<Form.Item label="Address">
				{getAddr?.map(id => 
		
						<h2>  <div><input
                type="radio"
								name={`addr-${id.id}`}
                value={id.id}
								//checked={id.id == selectAddr?.id}
								onChange={(e)=>
									{
										getSelAddr((pre)=>{
											return {...pre,id: e.target.value}
										})
									}}
              />
              
								<span>  {id.name}, {id.address}, {id.city}, {id.state}, {id.zipcode} , {id.phone}</span>
								</div></h2>
       
        )}          
			</Form.Item>
			</div>
			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
	
			<Form.Item
        label="Deliver to"
        rules={[{ 
                required: true, 
                message: 'Please input your Name!' 
              }]}
         >
         <Input 
          name="name"
					placeholder='Deliver to!'
          value={addingAddr?.name}
          onChange={(e)=>
            {
              setAddingAddr((pre)=>{
                return {...pre,name: e.target.value}
              })
            }}
          />
          </Form.Item>
				<Form.Item 
					name="address" 
					label="Address" 
					hasFeedback
				>
					<Input.TextArea name="address" placeholder="Address" value= {addingAddr?.address} 
					   onChange={(e)=>
						{
							setAddingAddr((pre)=>{
                return {...pre,address: e.target.value}
              })
						}}  />
				</Form.Item>
				<Form.Item 
					name="phone" 
					label="Phone No." 
					hasFeedback
				>
					<Input name="phone" placeholder="Phone Number" value={addingAddr?.phone}
					   onChange={(e)=>
						{
							setAddingAddr((pre)=>{
                return {...pre,phone: e.target.value}
              })
						}}/>
				</Form.Item>
				<Form.Item 
					name="city" 
					label="City" 
					hasFeedback
				>
					<Input name="city" placeholder="City" value={addingAddr?.city} 
					   onChange={(e)=>
						{
							setAddingAddr((pre)=>{
                return {...pre,city: e.target.value}
              })
						}}/>
				</Form.Item>
				
				<Form.Item 
					name="state" 
					label="State" 
					hasFeedback
				>
					<Input name="state" placeholder="State" value= {addingAddr?.state}
					   onChange={(e)=>
						{
							setAddingAddr((pre)=>{
                return {...pre,state: e.target.value}
              })
						}}/>
				</Form.Item>
				<Form.Item 
					name="zipcode" 
					label="Pincode" 
					hasFeedback
				>
					<Input 	name="pincode" placeholder="pincode" value={addingAddr?.zipcode}
					   onChange={(e)=>
						{
							setAddingAddr((pre)=>{
                return {...pre,zipcode: e.target.value}
              })
						}}/>
				</Form.Item>
      </Modal>

			</Card>

			<Card>
				<Button type="primary" disabled={setProd?.status == "unavailable"}   onClick={checkout}>Proceed to Checkout</Button>
			</Card>
			</Form>
    </div>
  );
}

export default Prodview