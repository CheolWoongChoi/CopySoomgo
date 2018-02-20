import React, { Component } from 'react';
import Slick from 'react-slick';

const relative_url = '../../../img/';

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'green'}}
        onClick={onClick}
      ></div>
    );
  }

export default class PopularitySection extends Component {
    
    render(){
        var settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <div id="popularity_section">
                <div>
                <h3>숨고의 인기 서비스</h3><br/><br/>
                    <Slick {...settings}>
                        <div>
                            <img className="img_size" src={`${relative_url}math.jpg`} />
                            <h5><strong>수학 과외</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}guitar.jpg`} />
                            <h5><strong>기타 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}english.jpg`} />
                            <h5><strong>영어 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}vocal.jpg`} />
                            <h5><strong>보컬 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                    </Slick>
                </div><br/><br/>

                <div>
                <h3>숨고의 활동 고수</h3><br/><br/>
                    <Slick {...settings}>
                        <div>
                            <img className="img_size" src={`${relative_url}math.jpg`} />
                            <h5><strong>수학 과외</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}guitar.jpg`} />
                            <h5><strong>기타 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}english.jpg`} />
                            <h5><strong>영어 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                        <div>
                            <img className="img_size" src={`${relative_url}vocal.jpg`} />
                            <h5><strong>보컬 레슨</strong></h5>
                            <h6>최근 활동 중인 고수 : Num명</h6>
                        </div>
                    </Slick>
                </div><br/><br/><br/><br/>

                <div>
                    <div align="center">
                        <h2>도움이 필요한 모든 일에 빠르고 정확하게 숨은 고수를 찾아드려요</h2>
                    </div>
                    <div>
                        <img src="" alt="고수 사진들"/>
                        1. 고수를 소개받으세요.
                        더 이상 시간을 낭비하지 마세요. 필요한 일과 조건만 알려드려요. 그 이후엔 숨고가 딱! 맞는
                        고수를 무료로 소개해 드릴게요.

                        2. 고수를 비교해보세요.
                        요청 후 최대 48시간 내로 고수들의 맞춤 견적서를 받아보실 수 있어요. 견적서를 통해 쉽게 
                        고수들을 비교할 수 있어요.

                        3. 고수를 선택하세요
                        원하는 조건에 딱! 맞는 고수를 선택하세요. 직접연락을 해 세부 사항을 조율할 수 있어요.
                    </div>
                </div>

            </div>
        )
    }
}