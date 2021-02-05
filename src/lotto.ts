import get_interface = require('./set.interface');
import  {issueArea}  from './class.issueArea';
import './lotto.scss';

class lotto {
    
    element_price_select : any
    regxp : any
    numbers : number[]
    
    constructor() {
        this.regxp = /[0-9]/g;
        this.element_price_select = document.getElementsByName( 'price_select' );
        this.numbers = this.setNumbers();

        (new issueArea).init();

        for( let item of this.element_price_select) {

            item.addEventListener( 'click', function(){
    
                // extraction( this.dataset.count );  ie11 이하에서 dataset 지원 안됨.                
                lotto_obj.extractionHandler( this.getAttribute('id').match( lotto_obj.regxp )[0] );

            });

        }

        
    }

    /** 
     * 로또 번호 추첨 및 그 외 정보 생성
    */
    extractionHandler( param_count:number) {

        let result_obj : get_interface.lotto_obj = {
            date_info : {},
            code_number : [],
            code_mix : '',
            total_count : '111102140/0000000295',
            numbers : [],
        };

        result_obj.code_mix = this.getMixCode();

        // code number 생성
        for( let loop_cnt = 0; loop_cnt < 7; loop_cnt++ ) {
            result_obj.code_number.push( this.getRandNumber(10000, 99999) );
        }

        // 숫자 생성
        for( let loop_cnt = 1; loop_cnt <= param_count; loop_cnt++ ) {        
            result_obj.numbers.push( this.getLottoNumbers() );
        }    

        // 발행일 / 추첨일 / 지급기한 날짜 생성
        result_obj.date_info = this.getDateInfo();
        
        import( /* webpackChunkName: "lotto_area" */ './class.lottoArea' ).then(module => {        
            const lotto_area = new module.default;				
            let get_lotto_html = lotto_area.init( result_obj );
    
            document.getElementsByClassName( 'issue_container__box__lotto_area' )[0].innerHTML = '';
            document.getElementsByClassName( 'issue_container__box__lotto_area' )[0].appendChild( get_lotto_html );
            
        });

    }

    /** 
     * 숫자 + 영문 대문자 코드 생성
    */
    getMixCode = () : string =>{

        let chars:string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        let string_length:number = 16;
        let result:string = '';

        for (let loop_cnt = 0; loop_cnt < string_length; loop_cnt++) {
            let rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum,rnum+1);
        }
        
        return result;
            
    }

    /** 
     * 날짜 시간 관련 처리 함수
    */
    getDateInfo = ()=>{

        let issue_date = {			
			issue : {
                date : '',
                time : '',
                week : ''
            }
			,enforcement : {
                date : '',                
                week : '',
                tr : 0
            }
			,deadline : {
                date : '',
            }
        };

        const week_arr = ['일', '월', '화', '수', '목', '금', '토'];
        let date_obj = new Date();
        
        // 발행일
        issue_date['issue']['date'] = date_obj.getFullYear() + '/' + this.addTenUnder( ( date_obj.getMonth() + 1) ) + '/' + this.addTenUnder( date_obj.getDate() );
        issue_date['issue']['time'] = date_obj.getHours() + ':' +  this.addTenUnder( date_obj.getMinutes() ) + ':' + this.addTenUnder( date_obj.getSeconds() );
        issue_date['issue']['week'] = '('+ week_arr[date_obj.getDay()] + ')';

        // 추첨일
        date_obj.setDate( date_obj.getDate() + ( 6 - date_obj.getDay() ) );
        issue_date['enforcement']['date'] = date_obj.getFullYear() + '/' + this.addTenUnder( ( date_obj.getMonth() + 1) ) + '/' + this.addTenUnder( date_obj.getDate() );    
        issue_date['enforcement']['week'] = '('+ week_arr[date_obj.getDay()] + ')';
        issue_date['enforcement']['tr'] = this.getRandNumber(1000000000, 1999999999);

        // 지급기한 
        date_obj.setDate( date_obj.getDate() + 366 );
        issue_date['deadline']['date'] = date_obj.getFullYear() + '/' + this.addTenUnder( ( date_obj.getMonth() + 1) ) + '/' + this.addTenUnder( date_obj.getDate() );    
        
        return issue_date;
        
    }
    
    /** 
     * 랜덤숫자 6개 반환 한다.
     * numbers 배열을 복사하여  배열의 index 룰 추출
     * 추출된 index에 해당하는 원소를 결과 값에 push 하고 해당 index 원소 삭제 반복
    */
    getLottoNumbers = ():any=>{

        let new_arr = [...this.numbers];
        let max_length:number;
        let result:any[] = [];
        let get_index:number;

        for( let loop_cnt = 0; loop_cnt < 6; loop_cnt++ ) {
            // 배열 길이 추출
            max_length = new_arr.length-1;
            // 배열 길이 만큼의 최대값 포함하는 랜덤 숫자 1개 생성
            get_index = this.getRandNumber(0, max_length );            
            // 추출된 index에 해당하는 원소 push 
            result.push( this.addTenUnder( new_arr[ get_index ] ) );
            // index에 해당하는 원소 삭제
            new_arr.splice( get_index, 1 );        
        }    

        return result.sort((a,b)=>a-b);
    }

    /**
     * 랜덤 숫자 생성
     * @param param_min 
     * @param param_max 
     */
    getRandNumber = ( param_min:number, param_max:number ):number =>{
        param_min = Math.ceil( param_min );
        param_max = Math.floor( param_max );
        return Math.floor(Math.random() * (param_max - param_min + 1)) + param_min; //최댓값도 포함, 최솟값도 포함
    }


    /** 
     * 10보다 작은 수는 0을 붙여준다.
    */
    addTenUnder = ( param_value:any ) : string =>{
        
        let return_value:string = "";
        
        if( param_value < 10 ){
            return_value = "0" + param_value ;
        } else {
            return_value = String( param_value );
        }

        return return_value;
    }

    /** 
     * 숫자 1~45를 배열로 세팅한다.
    */
    setNumbers = ()=>{

        let arr = [];

        for(let loop_cnt = 1; loop_cnt <= 45; loop_cnt++) {
            arr.push( loop_cnt );
        }

        return arr;
    }



}

const lotto_obj = new lotto;

