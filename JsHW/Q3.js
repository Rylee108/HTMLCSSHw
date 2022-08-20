function checkEmailId(str) {
    for(let s in str){
        if(s == "." || "@"){
            return true;
        }
        else{return false}
    }
}