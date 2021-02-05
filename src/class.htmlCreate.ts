export class createHtml {
        
    constructor() {}

    make = ( param:any )=>{
        
        let result : any;
        let new_tag : any;

        if( param.hasOwnProperty('tag') == true ) {

            new_tag = document.createElement( param.tag );

            //# tag set        
            this.setTagAttr( new_tag, param );

            if( param.hasOwnProperty('child') == true ) {
                
                for( let child_item of param.child ){		
                    
                    new_tag.appendChild( this.make( child_item ) );

                }
            } 

            result = new_tag;
        } else {
            
            if( param.hasOwnProperty('text') == true ) {
                result = document.createTextNode( param.text );                
            }

        }

        return result;
        
    }

    setTagAttr = ( param_element:any, param_data:any )=>{

        //# 해당 태그의 속성을 정의한다.
        if( param_data.hasOwnProperty('attr') == true ) {

            for( var item in param_data.attr ) {
                switch( item ) {
                    case 'display' : {
                        param_element.style.display = param_data.attr.display;
                        break;
                    }
                    case 'width' : {
                        param_element.style.width = param_data.attr.width;                                
                        break;
                    }
                    case 'height' : {
                        param_element.style.height = param_data.attr.height;
                        break;
                    } 
                    case 'borderTop' : {
                        param_element.style.borderTop = param_data.attr.borderTop;
                        break;
                    }
                    case 'borderLeft' : {
                        param_element.style.borderLeft = param_data.attr.borderLeft;
                        break;
                    } 
                    case 'borderRight' : {
                        param_element.style.borderRight = param_data.attr.borderRight;
                        break;
                    } 
                    case 'font_size' : {
                        param_element.style.fontSize = param_data.attr.font_size;
                        break;
                    }
                    case 'border' : {
                        param_element.style.border = param_data.attr.border;
                        break;
                    }
                    case 'resize' : {
                        param_element.style.resize = param_data.attr.resize;
                        break;
                    }
                    case 'backgroundColor' : {
                        param_element.style.backgroundColor = param_data.attr.backgroundColor;
                        break;
                    }
                    
                    default : {
                        param_element.setAttribute( item , param_data.attr[ item ] );
                    }
                }
            }
        }
        
    }    



}