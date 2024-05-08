function check_number(Number){
    if(Number.length === 10){
        if(isNaN(parseInt(Number))){
            return false
        }
        return true
    }
    return false
};

function check_email(Email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Email)
};

function check_name(Name){
    return true
};

function check_all_params(Name, Phone, Email){
    if(Name === "" || Phone === "" || Email === ""){
        alert("All fields are required");
        return false
    }
    if(check_number(Phone)){
        if(check_email(Email)){
            if(check_name(Name)){
                return true
            }
            alert("Name is not valid");
            return false
        }
        alert("Email is not valid");
        return false
    }
    alert("Number is not valid");
    return false
};

module.exports =
    {
        check_all_params
    }