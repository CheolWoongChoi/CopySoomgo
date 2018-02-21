import React, { Component } from 'react';

const accum_data = [
    { name: "누적 요청서", num: "510,000", unit: "개"},
    { name: "등록된 고수", num: "100,000", unit: "명"},
    { name: "평균 리뷰별점", num: "4.5", unit: "/5점"},
]

const category_data = [
    { icon: "glyphicon glyphicon-user", name: "레슨", href:'' }, 
    { icon: "glyphicon glyphicon-home", name: "홈/리빙", href:'' },
    { icon: "glyphicon glyphicon-list-alt", name: "이벤트", href:'' },
    { icon: "glyphicon glyphicon-level-up", name: "비즈니스", href:'' },
    { icon: "glyphicon glyphicon-tasks", name: "디자인/개발", href:'' },
    { icon: "glyphicon glyphicon-heart-empty", name: "건강/미용", href:'' },
    { icon: "glyphicon glyphicon-th", name: "기타", href:'' } 
]

   
export default class SearchSection extends Component {

    renderAccumInfo({name, num, unit}){
        return(
            <div key={name} className="category">
                <div>{name}</div>
                <div>
                    <span className="accumulated_num">{num}</span> {unit}
                </div>
            </div>
        )
    }

    renderIcon({icon, name, href}){
        return (
            <a key={name} className="icon_category" href=''>
               <span className={icon} aria-hidden="true"></span>
               <p>{name}</p>
            </a>
        );
    }

    render(){
        return(
            <div>
                {/* 네비게이션 바 */}
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

                {/* 검색 바 */}
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

                {/* 누적 정보 */}
                <div id="accumulated_info" align="center">
                   {accum_data.map( data => this.renderAccumInfo(data) )}
                </div>

                {/* 아이콘 표시 */}
                <div className="background_grey" align="center">     
                    {category_data.map( data => this.renderIcon(data) )}
                </div>
            </div>
        );
    }
}
