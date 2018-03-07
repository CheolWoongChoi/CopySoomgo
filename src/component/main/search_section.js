import React, { Component } from 'react';
import logo1 from '../../img/brand_logo.png';
import logo2 from '../../img/english.jpg';

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

    constructor(props){
        super(props);
        this.state = {
            toggle: false,
            icon_bar: "",
            cancle: "hidden"
        };
        this.toggleIcon = this.toggleIcon.bind(this);
    }

    //네비게이션 바 - 버튼 클릭 이벤트
    toggleIcon(){
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }) );

        if(this.state.toggle)
            this.setState({icon_bar: "", cancle: "hidden"});
        else
            this.setState({icon_bar: "hidden", cancle: ""});
    }

    //누적 정보 
    renderAccumInfo({name, num, unit}){
        return(
            <div key={name} className="accum_category">
                <div>{name}</div>
                <div>
                    <span className="accumulated_num">{num}</span> {unit}
                </div>
            </div>
        )
    }

    //카테고리 아이콘
    renderIcon({icon, name, href}){
        return (
            <a key={name} className="icon" href=''>
               <span className={icon} aria-hidden="true"></span>
               <p>{name}</p>
            </a>
        );
    }

    render(){
        return(
            <div className="container-fluid carousel_effect index_gosu_01">
                {/* 네비게이션 바 */}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div>
                                <button type="button" className="navbar-toggle collapsed navbar-button" 
                                    data-toggle="collapse" data-target="#link_group" onClick={this.toggleIcon}>
                                    <span className={this.state.icon_bar}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </span>
                                    <div className={this.state.cancle}>
                                        <img className="cancle_icon" src={require('../../img/cancle.png')} 
                                            alt="cancleImage"/>
                                    </div>
                                </button>
                                <a href="/">
                                    <img className="brand_logo" 
                                        src={require('../../img/brand_logo.png')}
                                        alt="brandImage"/>
                                </a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="link_group">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="link_name"><a href="">고수 찾기</a></li> 
                                <li className="link_name"><a href="">고수로 가입하기</a></li> 
                                <li className="link_name"><a href="">회원가입</a></li> 
                                <li className="link_name"><a href="">로그인</a></li> 
                            </ul>
                        </div>
                    </div>{/* 네비게이션 바 container-fluid */}
                </nav>

                {/* 검색 바 */}
                <div className="row first_section_search" align="center">
                    <div className="col-md-12">
                        <h1 id="first_section_search_word">숨고가 딱! 맞는 고수를 소개해 드려요</h1>
                    </div>
                    <div className="col-md-12">
                        <form>
                            <div className="input-group input-group-lg" id="first_section_search_input">
                                <input type="text" className="form-control" placeholder="어떤 전문가를 찾으세요?"/>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary">고수찾기</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                {/* 누적 정보 */}
                <div className="accumulated_info row">
                    {accum_data.map( data => this.renderAccumInfo(data) )}
                </div>

                {/* 아이콘 표시 */}
                <div className="icon_category row background_grey">     
                    {category_data.map( data => this.renderIcon(data) )}
                </div>
        </div> //container-fluid
        );
    }
}
