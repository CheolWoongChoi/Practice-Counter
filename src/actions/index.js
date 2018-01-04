export function calculationType(sign, number){

    switch(sign){
        case "ADD":
            console.log("ACTION ADD");
            return {
                type: "ADD",
                number: number
            };
        case "MINUS":
            console.log("ACTION MINUS"); 
            return {
                type: "MINUS",
                number: number 
            };
    }
}