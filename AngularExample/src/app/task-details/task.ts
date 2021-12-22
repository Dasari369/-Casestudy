export interface ITask{
    taskID:number;
    ownerID:number;
    creatorID:number;
    tname:string;
    status:string;
    desc:string;
    priority:string;
    notes:string;
    statusChangedOn:Date;
    bookMarked:Boolean;
    createdon:Date;

}