import { Card, Form, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ApiData () {
  const [select, setSelected]  = useState('');
  const [optionList,setOptionList] = useState([]);
  const [nameList,setStateList] = useState([]);
  const[ univSelect,setUniv] = useState([]);
  const[detailList,setDetail] = useState([]);

  console.log(select);
  const fetchData = async () => {
      axios
        .get('http://universities.hipolabs.com/search?countries')
        .then((response) => {
          console.log(response.data)
          if(response.status === 200){
              //check the api call is success by stats code 200,201 ...etc
              setOptionList(response.data)
          }else{
              //error handle section 
          }
        })
        .catch((error) => console.log(error));
    };

  useEffect(()=>{
      fetchData();
  },[])

  const registerSubmit = (selectedOption) => {
    setSelected(selectedOption);
      axios.get(`http://universities.hipolabs.com/search?country=${selectedOption}`).then(res => {
        console.log(res)
        if(res.status === 200)
        {
          setStateList(res.data)
      }
        else
        {
  
        }
  
      }).catch((error) => console.log(error));
  }



const handle = selectedOption => {
  setUniv(selectedOption);
   axios.get(`http://universities.hipolabs.com/search?country=${select}&name=${selectedOption}`).then(res => {
    console.log(res)
    if(res.status === 200)
    {
      setDetail(res.data)
  }
    else
    {

    }

  }).catch((error) => console.log(error));
}



console.log(JSON.stringify(detailList));
const listCountry = [...new Set(optionList)];
  return (
    <div>   
      <Form.Item label="Select the Country">  
      <Select
          disabled={false}
         // value={select}
          onChange={registerSubmit}
          
          style={{
            width: 800,
            }}
          //onClick ={registerSubmit}
          >
          {listCountry?.map((item,index) => (
          <option key={item.id} value={item.country}>
              {item.country}
          </option>
          ))}
      </Select>
      </Form.Item> 
      <br />
      <br />
      <Form.Item label="Select the University">
      <Select
          disabled={false}
          //onClick ={getDetails}
          style={{
            width: 800,
            }}
          //value={univSelect}
        //  onChange={(e) => setUniv(e)}
          onChange={handle}
         
          >
            {nameList?.map((item) => (
          <option key={item._id} value={item.name}>
              {item.name}
          </option>
          ))}
      </Select>
      </Form.Item> 
      <br />
      <br />
      <div>
      <Card>
          <h3><b>University Details:</b></h3>
      {detailList?.map(id => 
              <h4>Name: {id.name} <br/>Country: {id.country}<br/>Website: <a href={id.web_pages}>{id.web_pages} </a> </h4>
              )}    

      </Card>
      </div>
      </div>

      
  );
}

export default ApiData