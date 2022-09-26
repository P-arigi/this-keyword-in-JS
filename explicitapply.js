var matt={
    firstName:"Matt",
    lastName:"Lane",
    instructor:true,
    favColor:"pink",
    dogOwner:true,
    deleteInfo:function(){
        console.log(arguments);
        for(var i=0;i<arguments.length;i++){
            delete this[arguments[i]];
        }
    }
}

var tim = {
    firstName: "Tim",
    lastName: "Garcia",
    instructor: true,
    favColor: "blue",
    dogOwner: false
};

var elie = {
    firstName: "Elie",
    lastName: "Schoppik",
    instructor: true,
    favColor: "purple",
    dogOwner: false
};
matt.deleteInfo('instructor','favColor');
matt; // {firstName: "Matt", lastName: "Lane", dogOwner: true}

matt.deleteInfo.apply(tim,['firstName','dogOwner','favColor']);
tim; // {lastName: "Garcia", instructor: true}

matt.deleteInfo.apply(elie,['instructor','favColor','dogOwner','lastName']);
elie; // {firstName: "Elie"}