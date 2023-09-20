import { Component } from 'react'; //1번방법
import imgLogo from './weed.png';
import PropTypes from 'prop-types';
import './App.css';
function TestClass4(props) {


    return (
        <>

        <div className="test4-body">
        <h1 className='test4-best'>이번주 베스트셀러</h1>
        <div className='test4-img'><img src={imgLogo}/></div>
        <div>
        <div className='test4-title'>{props.title}</div>
        <div className='test4-info'>
        <div className='test4-author'>{props.author}</div>
        <div className='test4-price'>{props.price}</div>
        <div className='test4-type'>{props.type}</div>
        </div>
        </div>
        </div>
        </>
    );

}

export default TestClass4;