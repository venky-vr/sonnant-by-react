import React, { Component, useState } from 'react';
import { Form, Input, Button, Radio, Card, Row, Col } from 'antd';
import { FaFacebook, FaApple } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

import "./SignUp.css"


const signInFb =() =>{
    window.location.href="https://en-gb.facebook.com/login/";
}

const signInApple = () =>{
    window.location.href="https://support.apple.com/en-in/HT210318";
}

const signInGoogl = () => {
    window.location.href="https://accounts.google.com"
}


const SignUp = () => {
   
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
      <>
      <div className="coanteinr">
          <div className="title">
              <h1>Sign Up</h1>
          </div>
         <div className="formLayout">
             <Row>
                 <Col span={24}>
                    <Button type="primary" className="fbBtnColor"
                    onClick={() => signInFb()}
                    >
                        <FaFacebook/> Sign in with Facebook
                    </Button>
                 </Col>
            </Row>
            <Row>
                 <Col span={24}>
                    <Button type="primary" className="appleBtnColor"
                    onClick={() => signInApple()}
                    >
                        <FaApple/> Sign in with Apple
                    </Button>
                 </Col>
            </Row>
            <Row>
                 <Col span={24}>
                    <Button type="primary" className="gooogleBtn"
                    onClick={() =>signInGoogl()}
                    >
                       <FcGoogle/> Sign in with Google
                    </Button>
                 </Col>
             </Row>
        </div>
        <div className="middleContainer">
            <h5><span>OR</span></h5>
            <Form
                name="basic"
                layout="vertical"
                 initialValues={{
                    remember: true,
                 }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
            >
                <Form.Item 
                    label="Company"
                    name="company" 
                    rules={[{ required: true, message: 'Please enter company' }]}
                    >
                    <Input type="text" placeholder="Email company " />
                </Form.Item>
                <Row className="infoRow">
                <Col span={12}>
                <Form.Item 
                    label="First Name"
                    name="firstName" 
                    rules={[{ required: true, message: 'Please enter first name' }]}
                    >
                    <Input type="text" placeholder="First Name" />
                </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item 
                    label="Last Name"
                    name="lastName" 
                    rules={[{ required: true, message: 'Please enter last name' }]}
                >
                    <Input  type="text" placeholder="Last Name " />
                </Form.Item>
                </Col>
                </Row>
                <Form.Item 
                    label="Email Address"
                    name="email" 
                    rules={[{ required: true, message: 'Please enter company email' }]}
                >
                    <Input placeholder="Email Company" type="email"/>
                </Form.Item>
                <Form.Item 
                    label="Create a password"
                    name="createPassword" 
                    >
                    <Input type="password" placeholder="Create a password" />
                </Form.Item>
                <Form.Item 
                    label="Repeat Password"
                    name="repeatPassword" 
                >
                    <Input placeholder="Repeat Password" type="password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="loginBtn">Sign Up</Button>
                </Form.Item>
                <span className="termsText">By Clicking Sign up, you agree to Sonnant's Terms and <a href="#">Conditions of Use.</a></span>
            </Form>
        </div>
  
      </div>
      </>
    );
  };
  
export default SignUp
