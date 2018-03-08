import React, { Component } from 'react';
import Slick from 'react-slick';

const service_data = [
    { image: 'math.jpg', title: '수학 과외', gosu_num: '0'},
    { image: 'guitar.jpg', title: '기타 레슨', gosu_num: '1'},
    { image: 'english.jpg', title: '영어 레슨', gosu_num: '2'},
    { image: 'vocal.jpg', title: '보컬 레슨', gosu_num: '3'}
]

const active_gosu_data = [
    {
        title: "Danny's Heart SWING", 
        name: 'Danny Lee',
        image: 'active_gosu_image_01.png', 
        review_num: 14, 
        hired_num: 7, 
        address:'서울 마포구 아현동 337-33'
    },
    {
        title: '와가바바스쿨', 
        name: '김명희', 
        image: 'active_gosu_image_02.png', 
        review_num: '15', 
        hired_num:'17', 
        address:'서울 강남구 역삼동 765-23'
    },
    {
        title: '영어 프랑스어 과외', 
        name: '손용석', 
        image: 'active_gosu_image_03.png', 
        review_num: '9', 
        hired_num:'8', 
        address:'서울 광진구 천호대로 지하 525'
    },
    {
        title: '재즈피아노와 싱어송라이팅, 재즈화성학 레슨', 
        name: '방지영',
        image: 'active_gosu_image_04.png',  
        review_num: '1', 
        hired_num:'5', 
        address:'서울 마포구 동교로 192-6'
    }  
]

//Slick Prev, Next 버튼
function PrevArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/popularity_section/prev_arrow.png')} alt="prev_arrow" 
                className={className} onClick={onClick}/>
        );
}

function NextArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/popularity_section/next_arrow.png')} alt="next_arrow" 
                className={className} onClick={onClick}/>
        );
}
  

export default class PopularitySection extends Component {
    
    renderStars(){
        let stars = [];

        for(let i=0; i<5; i++){
            stars.push(<img key={i} src={require("../../img/popularity_section/review_star.png")} 
                alt="review_star"/>);
        }
        return stars;
    }

    renderPopularService({image, title, gosu_num}){
        return(
            <div key={title}>
                <img className="img_size" src={require('../../img/popularity_section/'+image)} alt="인기 서비스" />
                <h5><strong>{title}</strong></h5>
                <h6>최근 활동 중인 고수 : {gosu_num}명</h6>
            </div>
        )
    }

    renderActiveGosu({title, name, image, review_num, hired_num, address}){
        return(
            <div key={title}>
                <div className="media" id="active_gosu">
                    <div className="media-left">
                        <img src={require('../../img/popularity_section/'+image)} alt="active_gosu_image"/>
                    </div>
                    <div id="active_gosu_info" class="media-body">
                        <p><strong>{title}</strong></p>
                        <p>{name}</p>
                        <p>
                            {this.renderStars()}
                            <small>({review_num}개)</small>
                        </p>
                        <p>
                            <img src={require("../../img/popularity_section/hired_num.svg")} alt="hired_num"/>
                            <small>고용횟수 {hired_num}회</small>
                        </p>
                        <p>
                            <img src={require("../../img/popularity_section/location.svg")} alt="location"/>
                            <small>{address}</small>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        var settings = {
            arrows: true,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [ 
                { breakpoint: 730, settings: { slidesToShow: 1 } },
                { breakpoint: 930, settings: { slidesToShow: 2 } }, 
                { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
            ]
        };

        return (
            <div className="container-fluid" id="popularity_section">
                <div>
                    <div>
                        <h3 className="popular_service_title_margin">
                            <strong>숨고의 인기 서비스</strong>
                        </h3><br/><br/>
                        <div>
                            <Slick {...settings}>
                                {service_data.map( data => this.renderPopularService(data) )}
                            </Slick>
                        </div><br/><br/>
                    </div>
                    <div>
                        <h3 className="active_gosu_title_margin">
                            <strong>숨고의 활동 고수</strong>
                        </h3><br/><br/>
                        <div>
                            <Slick {...settings}>
                                {active_gosu_data.map( data => this.renderActiveGosu(data) )}   
                            </Slick>
                        </div>
                    </div>
                </div><br/><br/><br/>
                <div id="gosu_intro" className="row">
                    <div align="center">
                        <h2><strong>도움이 필요한 모든 일에 빠르고 정확하게 숨은 고수를 찾아드려요</strong></h2>
                    </div>
                    <div id="help_info">
                        <div className="col-md-6">
                            <img src={require('../../img/popularity_section/gosu_image.png')} className="img-responsive" alt="고수 사진들"/>
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <div>
                                <h4 className="help_info_title">1. 고수를 소개받으세요.</h4>
                                <p>
                                    더 이상 시간을 낭비하지 마세요. 필요한 일과 조건만 알려드려요. 그 이후엔 숨고가 딱! 맞는
                                    <br/>고수를 무료로 소개해 드릴게요.
                                </p>
                            </div>
                            <div>
                                <h4 className="help_info_title">2. 고수를 비교해보세요.</h4>
                                <p>
                                    요청 후 최대 48시간 내로 고수들의 맞춤 견적서를 받아보실 수 있어요. 견적서를 통해 쉽게 
                                    <br/>고수들을 비교할 수 있어요.
                            </p>
                            </div>
                            <div>
                                <h4 className="help_info_title">3. 고수를 선택하세요</h4>
                                <p>
                                    원하는 조건에 딱! 맞는 고수를 선택하세요. 직접연락을 해 세부 사항을 조율할 수 있어요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}