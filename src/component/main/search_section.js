import React, { Component } from 'react';

export default class SearchSection extends Component {

    render(){
        return(
            <div>
                <div>
                <img className="brand_logo" src="../../../img/brand_logo.png" alt="brandImage" />

                <a className="link_name" href="">고수 찾기</a> 
                <a className="link_name" href="">고수로 가입하기</a> 
                <a className="link_name" href="">회원가입</a> 
                <a className="link_name" href="">로그인</a> 
                </div>

                <div className="form-group">
                숨고가 딱! 맞는 고수를 소개해 드려요
                <form class="input-group">
                    <input type="text" className="form-control" placeholder="어떤 전문가를 찾으세요?"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">고수찾기</button>
                    </span>
                </form>
                </div>
            </div>
           
        );
    }
}
