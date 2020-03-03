export class User{
    id : number;
    fname : string;
    lname : string;
    username : string;
    uemail : string;
    dob : Date;
    password : string;
    profile : File;

    constructor(fname,lname,username,uemail,dob,password,profile){
        this.fname = fname;
        this.lname = lname;
        this.username =  username;
        this.uemail = uemail;
        this.dob = dob;
        this.password = password;
        this.profile = profile;
    }
    
}