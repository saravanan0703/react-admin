import { Button, Card, Input, Modal,Form, Radio } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Checkout() {
	const history = useHistory();
	const [setOrder, setOrderView] = useState();
	const [setProd, setProdView] = useState();
  const[addingAddr,setAddingAddr]=useState(null);
	const [loadings, setLoadings] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const paymentConfirm = async (index) => {
		const orderid = setOrder?.id;
		await axios.post(`http://lara.localhost/api/update-order?&order_id=${orderid}`).then(res => {
			console.log(res);
	});
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
	
			return newLoadings;

      });

			setIsModalVisible(true);
    }, 3000);
  };


	const handleCancel = () => {
		setIsModalVisible(false);
	};


	const handleOk = async () => {
			console.log(setOrder?.id)
			history.push("/app/products/list")
	};


	const { id } = useParams();
	console.log({id})
	const fetchData = async() => {
		const api = await axios.get(`http://lara.localhost/api/checkout/${id}`);
		console.log(api);
		if(api.data.sucess = "success")
		{
			setOrderView(api.data.orders);
			setProdView(api.data.products);
			setAddingAddr(api.data.address);
		}
		else {
			//
		}
	};
	
	useEffect(() => {
		fetchData();
	}, [])

  return (
    <div>
			<Card>
			<div>
      <h2><strong>Product Details:</strong></h2>
			<h3>ProductId : {setProd?.id}</h3>
			<h3>OrderId : {setOrder?.id}</h3>
			<h3>Product Name : {setProd?.pname}</h3>
			<h3>Category : {setProd?.category}</h3>
			<h3>Status : {setProd?.status}</h3>
			<h3>Description : {setProd?.desc}</h3>

			</div>
			<div style={{ marginTop: -277, float: "right", marginRight: 300 }}>
			<h2><strong>Shipping To:</strong></h2>
			<h3>Name : {addingAddr?.name}</h3>
			<h3>Phone : {addingAddr?.phone}</h3>
			<h3>Address : {addingAddr?.address}</h3>
			<h3>City : {addingAddr?.city}</h3>
			<h3>State : {addingAddr?.state}</h3>
			<h3>Pin Code : {addingAddr?.zipcode}</h3>
			</div>
			</Card>

			<Card>
				<Button type="primary" loading={loadings[0]} onClick={() => paymentConfirm(0)} style={{ background: "forestgreen", borderColor: "white" }}>Make Payment</Button>
			</Card>
			<Modal title="Payment Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<h3>Thank you for Shopping With Us :)</h3>
				<h4>Your Order Successfully Placed !</h4>
				<h4>And Your OrderId is: {setOrder?.id} </h4>
			</Modal>
    </div>
  );
}

export default Checkout