import React, { Component, useEffect, useState } from 'react'
import { PrinterOutlined } from '@ant-design/icons';
import { Card, Table, Button, Tag } from 'antd';
import { invoiceData } from './invoiceData';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const { Column } = Table;

function Invoice(){

	const{ id } = useParams();

	const[getAddr,getAddAddr] = useState();
	const[getProd,getProducts] = useState();
	const[getOrd,getOrders] = useState();

	const fetchAddr = async() => {
		const userDetails = localStorage.getItem('user_id');
		
	console.log({id})
		const api = await axios.get(`http://lara.localhost/api/orders/${id}/checkout`);
		console.log(api.data);
		getAddAddr(api.data.address)
		getProducts(api.data.products)
		getOrders(api.data.orders)

	};
	
	useEffect(() => {
		fetchAddr();
	}, [])

	function total() {
		let total = 0;
		columns.forEach((elm) => {
			total += elm.price;
		})
		return total
	}

	const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


const columns = [
	{
		key: getOrd?.id,
		product: getProd?.pname,
		quantity: 1,
		price: getProd?.price
	},
];
	
		return (
            <div className="container">
				<Card>
					<div className="d-md-flex justify-content-md-between">
						<div>
							<img src="" alt=""/>
							<address>
								<p>
									<span className="font-weight-semibold text-dark font-size-md">React</span><br />
									<span>9498 Harvard Street</span><br />
									<span>Fairfield, Chicago Town 06824</span><br />
									<abbr className="text-dark" title="Phone">Phone:</abbr>
									<span>(123) 456-7890</span>
								</p>
							</address>
						</div>
						<div className="mt-3 text-right">
							<h2 className="mb-1 font-weight-semibold">Invoice #{getOrd?.id}</h2>
							<p>{currDate} {currTime}</p>
							<address>
								<p>
									<h2 className="mb-1 font-weight-semibold">Billed To:</h2>
									<span className="font-weight-semibold text-dark font-size-md text-capitalize">{getAddr?.name}</span><br />
									<span>{getAddr?.address}</span><br />
									<span>{getAddr?.city},{getAddr?.state},{getAddr?.zipcode}</span><br />
									<abbr className="text-dark" title="Phone">Phone:</abbr>
									<span>{getAddr?.phone}</span>
								</p>
							</address>
						</div>
					</div>
					<div className="mt-4">
						<Table dataSource={columns} pagination={false} className="mb-5">
							<Column title="No." dataIndex="key" key="key"/>
							<Column title="Product" dataIndex="product" key="product"/>
							<Column title="Quantity" dataIndex="quantity" key="quantity"/>
							<Column title="Price" 
								render={(text) => (
									<NumberFormat 
										displayType={'text'} 
										value={(Math.round(text.price * 100) / 100).toFixed(2)} 
										prefix={'$'} 
										thousandSeparator={true}
									/>
								)} 
								key="price"
							/>
							<Column 
								title="Total" 
								render={(text) => (
									<NumberFormat 
										displayType={'text'} 
										value={(Math.round((text.price * text.quantity) * 100) / 100).toFixed(2)} 
										prefix={'₹'} 
										thousandSeparator={true}
									/>
								)} 
								key="total"
							/>
						</Table>
						<div className="d-flex justify-content-end">
							<div className="text-right ">
								<div className="border-bottom">
									<p className="mb-2">
										<span>Sub - Total amount: </span>
										<NumberFormat 
											displayType={'text'} 
											value={(Math.round((total()) * 100) / 100).toFixed(2)} 
											prefix={'₹'} 
											thousandSeparator={true}
										/>
									</p>
									<p>vat (10%) : {(Math.round(((total()/ 100) * 10 ) * 100) / 100).toFixed(2)}</p>
								</div>
								<h2 className="font-weight-semibold mt-3">
									<span className="mr-1">Grand Total: </span>
									<NumberFormat 
										displayType={'text'} 
										value={((Math.round((total()) * 100) / 100) + (total()/ 100) * 10).toFixed(2)} 
										prefix={'₹'} 
										thousandSeparator={true}
									/>
								</h2>
							</div>
						</div>
						<p className="mt-5">
							<small>
								In exceptional circumstances, Financial Services can provide an urgent manually processed special cheque.
								Note, however, that urgent special cheques should be requested only on an emergency basis as manually 
								produced cheques involve duplication of effort and considerable staff resources. Requests need to be 
								supported by a letter explaining the circumstances to justify the special cheque payment
							</small>
						</p>
					</div>
					<hr className="d-print-none"/>
					<div className="text-right d-print-none">
						<Button type="primary" onClick={() => window.print()}>
							<PrinterOutlined  type="printer" />
							<span className="ml-1">Print</span>
						</Button>
					</div>
				</Card>
			</div>
        );
	
}

export default Invoice
