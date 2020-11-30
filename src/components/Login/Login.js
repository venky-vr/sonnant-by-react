import React, { Component, useState } from 'react';
import { Form, Input, Button, Radio, Card, Row, Col } from 'antd';
import { FaFacebook, FaApple } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

import "./Login.css"


const signInFb =() =>{
    window.location.href="https://en-gb.facebook.com/login/";
}

const signInApple = () =>{
    window.location.href="https://support.apple.com/en-in/HT210318";
}

const signInGoogl = () => {
    window.location.href="https://accounts.google.com"
}


const Login = () => {
   
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
              <h1>Sign in</h1>
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
                    label="Email Address"
                    name="email" 
                    rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                    <Input type="email" placeholder="Email Address" />
                </Form.Item>
                <Form.Item 
                    label="Password"
                    name="password" 
                    rules={[{ required: true, message: 'Please enter password' }]}
                >
                    <Input placeholder="Password" type="password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                </Form.Item>
                <a className="login-form-forgot" href="">
                    Forgot password?
                </a>
            </Form>
        </div>
  
      </div>
      </>
    );
  };
  
export default Login
