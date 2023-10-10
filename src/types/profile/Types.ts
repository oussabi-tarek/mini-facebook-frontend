import { User } from "../Types";

export type PopupEditUserProps={
    handlePopup :() =>  void;
    updateUser:(userId: string, user : updateUserInput ) => void;
    user: User;
}


export type updateUserInput={
    firstName:string;
    lastName:string;
    email: string;
    location: string;
    biography: string;
}

export type AsideProfileProps={
    user : User;
    updateUserClick: void;
}