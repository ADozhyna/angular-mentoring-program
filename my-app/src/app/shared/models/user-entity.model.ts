export interface IUserEntity {
    id: number;
    firstName: string;
    lastName: string;
}

export class UserEntity implements IUserEntity {
    public id: number;
    public firstName: string;
    public lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
