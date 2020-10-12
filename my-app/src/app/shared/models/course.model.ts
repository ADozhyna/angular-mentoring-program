export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: string;
    description: string;
}

export class Course implements ICourse {
    public id: number;
    public title: string;
    public creationDate: Date;
    public duration: string;
    public description: string;
    constructor(id: number, title: string, creationDate: Date, duration: string, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
