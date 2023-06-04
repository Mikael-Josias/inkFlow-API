
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IApplicationError {
    name: string;
    message: string;
}