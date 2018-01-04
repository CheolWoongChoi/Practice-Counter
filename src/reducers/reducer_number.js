export default function(state = 0, action) {
    
    switch(action.type){
        case "ADD":
            console.log("ADD");
            return action.number + 1;
        case "MINUS":
            console.log("MINUS");
            return action.number - 1;
    }

    return state;

}