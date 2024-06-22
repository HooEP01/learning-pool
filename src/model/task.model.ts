export interface Task {
    id: string;
    boardPk?: string;
    title: string;
    description: string;
    // status: string;
    // checkList: string[];
    // attachList: string[];
    // memberList: Member[];
    // labelList: string[];
    // commentList: string[];
    // dueDate: string;
    // createdDate: string;
    // createdBy: string;
    // updatedDate: string;
    // updatedBy: string;
    // deletedDate: string;
    // deletedBy: string;
    // isActive: boolean;
}

interface Member {
    id: string;
    joinDate: string;
}