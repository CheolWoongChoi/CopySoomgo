import React, { Component } from 'react';

const category_name = ["레슨", "홈/리빙", "이벤트", "비즈니스", "디자인/개발", "건강/미용", "기타"];
const category_icon = [ "glyphicon glyphicon-user", 
   "glyphicon glyphicon-home", "glyphicon glyphicon-list-alt", "glyphicon glyphicon-level-up", 
   "glyphicon glyphicon-tasks", "glyphicon glyphicon-heart-empty", "glyphicon glyphicon-th" ];

   
export default class SearchSection extends Component {

    renderIcon(category_icon, category_name){
        return (
            <div align="center">
               <span class={category_icon} aria-hidden="true"></span>
               <p>{category_name}</p>
            </div>
        );
    }

    render(){
        return(
            <div>
                <div className="first_section_nav">
                    <a href="">
                        <img className="brand_logo" src="../../../img/brand_logo.png" alt="brandImage"/>
                    </a>
                    <span id="first_section_nav_link_name">
                        <a className="link_name" href="">고수 찾기</a> 
                        <a className="link_name" href="">고수로 가입하기</a> 
                        <a className="link_name" href="">회원가입</a> 
                        <a className="link_name" href="">로그인</a> 
                    </span>
                </div>

                <div className="first_section_search" align="center">
                    <h1 id="first_section_search_word">숨고가 딱! 맞는 고수를 소개해 드려요</h1>
                    <form>
                        <div className="input-group" id="first_section_search_input">
                            <input type="text" className="form-control" placeholder="어떤 전문가를 찾으세요?"/>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">고수찾기</button>
                            </span>
                        </div>
                    </form>
                </div>

                <div id="accumulated_info" align="center">
                   <div className="category">
                        <div>누적 요청서</div>
                        <div>
                            <span className="accumulated_num">Num</span> 개
                        </div>
                   </div>
                    <div className="category">
                        <div>등록된 고수</div>
                        <div>
                            <span className="accumulated_num">Num</span> 명
                        </div>
                   </div>
                   <div className="category">
                        <div>평균 리뷰별점</div>
                        <div>
                            <span className="accumulated_num">Num</span> 점
                        </div>
                   </div>
                </div>

                <div>
                    {this.renderIcon()}
                </div>
            </div>
        );
    }
}
