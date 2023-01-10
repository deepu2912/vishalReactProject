import React, { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './home.css';

export const Home = () => {
    const fnHitApi = () => {
        if (inputRef.current.value === '') {
            alert('Please enter some text');
            return;
        }

       

        let bodyContent = JSON.stringify({
            "prompt": "my name is deepanshu tl:dr"
        });

        fetch("https://text-summarization-api.azurewebsites.net/api/GetSummary?code=HkdjDjwCV7eu66UftQIeiJxR1QeubtP7-2mbdSdobHwRAzFuzgroTg==", {
            method: "POST",
            body: bodyContent 
        }).then(data => data.text()).then(result => console.log(result));

    }

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <Row className=" App">
            <Col lg="12">
                <InputGroup className="mb-10 textbox">
                    <Form.Control as="textarea" ref={inputRef} aria-label="Sumarize" />
                </InputGroup>
            </Col>
            <Col lg="12" className="mt-5">
                <Button variant="primary" onClick={() => fnHitApi()}>Summarize</Button>
            </Col>
        </Row>
    );
}