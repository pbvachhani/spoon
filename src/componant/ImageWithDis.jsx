import React from 'react';
import SecondSectionText from './SecondSectionText';

const ImageWithDis = (props) => {
    return (
        <>
            <div className={props.columnDirection}>
                <div className="col-md-5">
                    <div className='img_with_dis_img_box'>
                        <img src='./images/img_with_dis-01.jpg' alt="" />
                    </div>
                </div>
                <div class="col-md-5">
                    <SecondSectionText textBold="From time to time I read the wisdom of Euismod." textNormal="I judge each one of the scarcely spoken words, right out of soft fear." width={"79%"} margin={"0 0 25px 70px"} />
                    <p className='img_with_dis_para_text'> Tritani consectetuer could be able to do this, by no means the least, to make them happen in a splendid way. Let them say that the democritus would have placed them, that he should be soft, and they envied him mediocrity, lest there should have been pains and dangers. </p>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className={props.columnDirection} style={{marginTop:"90px"}}>
                <div className="col-md-2">
                </div>
                <div class="col-md-5">
                    <SecondSectionText textBold="I will scarcely refuse you, the elitist of Antiopus, as before." textNormal="What does it take to live with my fear of tincidunts?" width={"79%"} margin={"0 0 25px 70px"} />
                    <p className='img_with_dis_para_text'> When I say labors and duties, hatred embraces the princes to the sea. Let it be learned in the courts, and let not the internet call any football. Some of the definitions were related to a permanent improvement. What does it take to live with my fear of tincidunts? </p>
                </div>
                <div class="col-md-5">
                    <div className='img_with_dis_img_box'>
                        <img src='./images/image_with_dis_02.jpg' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithDis;
