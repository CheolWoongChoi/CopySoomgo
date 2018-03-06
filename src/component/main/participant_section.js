import React, { Component } from 'react';
import logo from '../../img/participant_section/reviewer_1.png';
import Slick from 'react-slick';

const review_data = [
    {
      title: "결혼준비 과정이 즐거웠어요",
      figure: "../../img/participant_section/reviewer_1.png",
      background_image: "gosu_background_image_01",
      gosu_name: "이성희 웨딩플래너",
      comment: `결정장애가 있는 저에게 결혼식장, 스드메를 고르는 일은 너무 스트레스 받는 일이였어요. 
                숨고를 통해 소개받은 이성희 플래너님이 너무 친절하게 
                그리고 제 취향만 쏙쏙 골라주셔서 행복하고 즐겁게 준비할 수 있었어요 ><`, 
      participant_name: "이용상", 
      rate: 5.0 
    },
    {
        title: "자신감을 심어준 촬영경험!!",
        figure: "../../img/participant_section/reviewer_1.png",
        background_image: "gosu_background_image_02",
        gosu_name: "강휘원 포토그래퍼",
        comment: `연기한지 5년이 지났는데 아직까지 이렇다할 성과가 없어서 자신감을 잃어가고 있었어요. 
                  마지막이라는 마음으로 프로필 사진을 찍었는데 강휘원 고수님을 만나고 
                  예전의 자신감을 얻은 것 같아요!! :)`, 
        participant_name: "이주연", 
        rate: 4.0 
    },
    {
        title: "이제 피아노 치는 남자!",
        figure: "../../img/participant_section/reviewer_1.png",
        background_image: "gosu_background_image_03",
        gosu_name: "윤다정 피아노",
        comment: `피아노는 항상 배워보고 싶었어요. 처음이라 어색하고 어렵지는 않을까 걱정을 하기도 했지만 
                  제가 원하는 곡을 잘 칠 수 있게 쉽고 재밌게 알려주셔서 너무 좋았어요. 
                  피아노 배우고 싶다면 윤다정 선생님 강추!`, 
        participant_name: "스티븐", 
        rate: 3.0 
    },
    {
        title: "퍼스널트레이닝 좋아요.",
        figure: "../../img/participant_section/reviewer_1.png",
        background_image: "gosu_background_image_04",
        gosu_name: "박주형 PT",
        comment: `레슨 시작 전 부터 박주형 고수님은 제가 궁금해 하는 사항에 대해 자세히 알려주셨어요. 
                  운동하는 것 이외에 일상생활의 식습관같은 사소한 부분까지 
                  챙겨주셔서 정말 제대로 운동하는 기분이에요!`, 
        participant_name: "이승환", 
        rate: 3.0 
    }
]

//Slick Prev, Next 버튼
function PrevArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/prev_arrow.png')} alt="prev_arrow" 
                className={className} onClick={onClick}/>
        );
}

function NextArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/next_arrow.png')} alt="next_arrow" 
                className={className} onClick={onClick}/>
        );
}

export default class ParticipantSection extends Component {

    iterateStar(rate){
        let stars = [];

        for(let i=0; i<rate; i++){
            stars.push(<img key={i} src={require("../../img/participant_section/review_star.png")} 
                alt="review_star"/>);
        }
        return stars;
    }

    renderThumbnail({title, figure, background_image, gosu_name, comment, participant_name, rate}){
        return(
            <div key={title} className="col-xs-6 col-sm-6 col-md-4">
                <div className="thumbnail" key={title}>
                    <div className={`gosu_background ${background_image}`}>
                        <div>
                            <h4><strong>{title}</strong></h4>
                            <p> <small>{gosu_name} 고수</small> </p>
                        </div>
                    </div>
                    <div className="caption">
                        <div className="comment">
                            <p>
                                <img src={require("../../img/participant_section/quotation.png")} alt="quotation"/>
                            </p>
                            <p>
                                {comment}
                            </p>
                        </div>
                        <div className="media">
                            <div className="media-left media-middle">
                                <img className="media-object" src={logo}
                                    alt={figure}/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading"><small>{participant_name}</small></h4>
                                    <div id="media-body-stars">
                                        {this.iterateStar(rate)}({rate})
                                    </div>
                            </div>
                        </div><br/>
                        <p className="text_center">
                            <button type="button" className="btn btn-default">이 서비스 요청하기</button>
                        </p>
                    </div> {/*caption*/}
                </div> {/*thumbnail*/}
            </div> //col-md-4
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
                { breakpoint: 650, settings: { slidesToShow: 1 } },
                { breakpoint: 930, settings: { slidesToShow: 2 } }, 
                { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
            ]
        };

        return(
            <div className="participant_section background_grey">
                <h2 className="text_center"> <strong>숨고를 통해 도움 받은 분들의 이야기!</strong> </h2>
                <div className="row">
                    <Slick {...settings}>
                        {review_data.map( data => this.renderThumbnail(data) )} 
                    </Slick>
                </div>
            </div>
        )
    }
}