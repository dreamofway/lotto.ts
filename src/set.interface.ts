interface element_struct_obj {
    tag : string,
    attr : any,
    child : any,
};

interface lotto_obj {
    date_info : object,
    code_number : number[],
    code_mix : string,
    total_count : string,
    numbers : any[],

};

export {lotto_obj, element_struct_obj};