import { createHtml } from './class.htmlCreate';
import get_interface = require('./set.interface');
import qr_image from './qr.png';

export default class lottoArea extends createHtml{
    init( params:any ) {

        let lotto_container = this.makeLottoContainer();
        let lotto_container_leftbox = this.makeLottoContainerLeftBox();
        let lotto_container_rightbox = this.makeLottoContainerRightBox();
        let lotto_container_leftbox_header = this.makeLottoContainerLeftBoxHeader();
        let lotto_container_leftbox_logo_area = this.makeLottoContainerLeftBoxLogoArea();
        let lotto_container_leftbox_data_info = this.makeLottoContainerLeftBoxDataInfo( params );
        let lotto_container_leftbox_data_list = this.makeLottoContainerLeftBoxDataList( params.numbers );
        let lotto_container_leftbox_bottom_info = this.makeLottoContainerLeftBoxBottomInfo( params );
        let lotto_container_leftbox_footer = this.makeLottoContainerLeftBoxFooter();

        lotto_container_leftbox.appendChild( lotto_container_leftbox_header ); // 왼쪽 영역 헤더 삽입
        lotto_container_leftbox.appendChild( lotto_container_leftbox_logo_area ); // 왼쪽 영역 로또 상단 영역 삽입
        lotto_container_leftbox.appendChild( lotto_container_leftbox_data_info ); // 왼쪽 영역 로또 정보 영역 삽입
        lotto_container_leftbox.appendChild( lotto_container_leftbox_data_list ); // 왼쪽 영역 로또 목록 영역 삽입
        lotto_container_leftbox.appendChild( lotto_container_leftbox_bottom_info ); // 왼쪽 영역 로또 하단 정보 영역 삽입
        lotto_container_leftbox.appendChild( lotto_container_leftbox_footer ); // 왼쪽 영역 로또 footer 영역 삽입
        lotto_container.appendChild( lotto_container_leftbox ); // 컨테이너 왼쪽 박스 삽입
        lotto_container.appendChild( lotto_container_rightbox ); // 컨테이너 오른쪽 박스 삽입

        return lotto_container;
    }

    /** 
     * 로또 영역 생성
    */
    makeLottoContainer = ()=>{

        return this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container'
            }
        });

    }

    /** 
     * 로또 left box 생성
    */
    makeLottoContainerLeftBox = ()=>{
        return this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box'
            }
        });
    }

    /** 
     * 로또 right box 생성
    */
    makeLottoContainerRightBox = ()=>{
        return this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--right_box'
            }
            ,child : [{
                tag : 'div'
                ,attr : {
                    class : 'lotto_container--right_box--vertical_text'
                }
                ,child : [{
                    text : '■ 인터넷구매 www.dhlottery.co.kr ■ 문의안내 1588-6450'
                }]
                
            }]
        });
    }

    /** 
     * 로또 헤더 생성
    */
    makeLottoContainerLeftBoxHeader = ()=>{

        return this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__header'
            }
            ,child : [
                {
                    tag : 'span'
                    ,attr : {
                        class : 'lotto_container--left_box__header--lotto'
                    }
                    ,child : [
                        {text : 'Lotto'}
                    ]
                }
                ,{
                    tag : 'span'
                    ,attr : {
                        class : 'lotto_container--left_box__header--number'
                    }
                    ,child : [
                        {text : '6/45'}
                    ]
                }
            ]
        });  

    }

    /** 
     * 로또 로고 영역
    */
    makeLottoContainerLeftBoxLogoArea = ()=>{

        let logo_box = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__logo_box'
            }       
        });

        let ad_title = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__logo_box--title'
            }
            ,child : [{
                text : '연금복권720+ 출시 (월 700만원 X 20년)'
            }]
        });

        let logo_area = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__logo_box--logo_area'
            }
            ,child : [
                {
                    tag : 'div'
                    ,attr : {
                        class : 'lotto_container--left_box__logo_box--logo_area__left'
                    }
                    ,child : [
                        {
                            tag : 'div'
                            ,attr : {
                                class : 'lotto_container--left_box__logo_box--logo_area__left--text'
                            }
                            ,child : [{
                                tag : 'div'
                                ,attr : {
                                    class : 'lotto_container--left_box__logo_box--logo_area__left--text__box'
                                }                            
                                ,child : [
                                    {
                                        tag : 'div'
                                        ,child : [{
                                            text : '동'
                                        }]
                                    }
                                    ,{
                                        tag : 'div'
                                        ,child : [{
                                            text : '행'
                                        }]
                                    }
                                    ,{
                                        tag : 'div'
                                        ,child : [{
                                            text : '복'
                                        }]
                                    }
                                    ,{
                                        tag : 'div'
                                        ,child : [{
                                            text : '권'
                                        }]
                                    }
                                ]
                            }]
                            
                        }
                        ,{
                            tag : 'div'
                            ,attr : {
                                class : 'lotto_container--left_box__logo_box--logo_area__left--lotto'
                            }
                            ,child : [{
                                tag : 'div'
                                ,attr : {
                                    class : 'lotto_container--left_box__logo_box--logo_area__left--lotto__box'
                                }
                                ,child : [
                                    {
                                        tag : 'span'
                                        ,attr : {
                                            class : 'lotto_container--left_box__header--lotto'
                                        }
                                        ,child : [
                                            {text : 'Lotto'}
                                        ]
                                    }
                                    ,{
                                        tag : 'span'
                                        ,attr : {
                                            class : 'lotto_container--left_box__header--number'
                                        }
                                        ,child : [
                                            {text : '6/45'}
                                        ]
                                    }
                                ]
                            }]
                            
                        }
                    ]
                }
                ,{
                    tag : 'div'
                    ,attr : {
                        class : 'lotto_container--left_box__logo_box--logo_area__right'
                    }
                    ,child : [
                        {
                            tag : 'img'
                            ,attr : {
                                src : qr_image
                            }
                        }
                    ]                
                }
            ]       
        });

        logo_box.appendChild( ad_title );
        logo_box.appendChild( logo_area );

        return logo_box;

    }

    /** 
     * 발행일 정보 영역
    */
    makeLottoContainerLeftBoxDataInfo = ( param_data:any )=>{
        
        let info_area = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area'
            }       
        });
        
        let round_area = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--round_text'
            }       
            ,child : [{
                text : '제 944 회'
            }]
        });

        let info_box = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box'
            } 
        });

        let info_box_issue_date = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box__issue_date'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : '발   행   일'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : ':'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.issue.date
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.issue.week
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.issue.time
                    }]
                }
            ] 
        });

        let info_box_enf_date = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box__enforcement_date'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : '추   첨   일'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : ':'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.enforcement.date
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.enforcement.week
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : 'TR : ' + param_data.date_info.enforcement.tr
                    }]
                }
            ] 
        });

        let info_box_deadline_date = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box__deadline_date'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : '지급기한'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : ':'
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.date_info.deadline.date
                    }]
                }            
            ] 
        });

        let info_box_code_number = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box__code_number'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[0]
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[1]
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[2]
                    }]
                }     
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[3]
                    }]
                }   
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[4]
                    }]
                }   
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[5]
                    }]
                }  
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[6]
                    }]
                }             
            ] 
        });

        let info_box_etc = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__info_area--info_box__etc'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_mix
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.total_count
                    }]
                }              
            ] 
        });

        info_box.appendChild( info_box_issue_date );
        info_box.appendChild( info_box_enf_date );
        info_box.appendChild( info_box_deadline_date );
        info_box.appendChild( info_box_code_number );
        info_box.appendChild( info_box_etc );
        info_area.appendChild( round_area );
        info_area.appendChild( info_box );

        return info_area;

    }

    /** 
     * 로또 생성 목록
    */
    makeLottoContainerLeftBoxDataList = ( param_list:any )=>{

        const list_order_arr = ['A','B','C','D','E'];
        let lotto_list_obj : get_interface.element_struct_obj;


        let lotto_list_box = this.make({
            tag : 'div'        
            ,attr : {
                class : 'lotto_container--left_box__lotto_list_box'
            }
        });

        lotto_list_box.appendChild( this.make({
            tag : 'hr'        
        }));

        for( let arr_idx = 0; arr_idx < param_list.length; arr_idx++ ) {
            
            lotto_list_obj = {
                tag : 'div'        
                ,attr : {
                    class : 'lotto_container--left_box__lotto_list_box--list'
                }
                ,child : []
            }

            lotto_list_obj.child.push({
                tag : 'div'
                ,child : [{
                    text : list_order_arr[ arr_idx ]
                }]
            });

            lotto_list_obj.child.push({
                tag : 'div'
                ,child : [{
                    text : '자동'
                }]
            });

            for(let item of param_list[ arr_idx ] ) {
                lotto_list_obj.child.push({
                    tag : 'div'
                    ,child : [{
                        text : item
                    }]
                });
            }

            // console.log( lotto_list_obj );

            lotto_list_box.appendChild( this.make( lotto_list_obj ) );

        }
        
        lotto_list_box.appendChild( this.make({
            tag : 'hr'        
        }));

        return lotto_list_box;

    }

    /** 
     * 로또 금액 및 일련번호 
    */
    makeLottoContainerLeftBoxBottomInfo = ( param_data:any )=>{
        
        let bottom_area = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__lotto_bottm'
            }
        }); 

        
        let price_area = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__lotto_bottom__price_box'
            }
            ,child : [
                {
                    tag : 'div'
                    ,attr : {
                        class : 'lotto_container--left_box__left_box__lotto_bottom__price_box--left'
                    }
                    ,child : [{
                        text : '금액'
                    }]
                }
                ,{
                    tag : 'div'
                    ,attr : {
                        class : 'lotto_container--left_box__left_box__lotto_bottom__price_box--right'
                    }
                    ,child : [{
                        text : '￦'+ ( param_data.numbers.length) + ',000'
                    }]
                }
            ]
        });
        
        let code_number = this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__lotto_bottom--code'
            }
            ,child : [
                {
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[0]
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[1]
                    }]
                }
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[2]
                    }]
                }     
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[3]
                    }]
                }   
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[4]
                    }]
                }   
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[5]
                    }]
                }  
                ,{
                    tag : 'div'
                    ,child : [{
                        text : param_data.code_number[6]
                    }]
                }
            ]
        });

        bottom_area.appendChild( price_area );
        bottom_area.appendChild( code_number );

        return bottom_area;
    }

    /** 
     * 푸터
    */
    makeLottoContainerLeftBoxFooter = ()=>{

        return this.make({
            tag : 'div'
            ,attr : {
                class : 'lotto_container--left_box__footer'
            }
            ,child : [
                {
                    tag : 'span'
                    ,attr : {
                        class : 'lotto_container--left_box__footer--lotto'
                    }
                    ,child : [
                        {text : 'Lotto'}
                    ]
                }
                ,{
                    tag : 'span'
                    ,attr : {
                        class : 'lotto_container--left_box__footer--number'
                    }
                    ,child : [
                        {text : '6/45'}
                    ]
                }
            ]
        });  

    }
}