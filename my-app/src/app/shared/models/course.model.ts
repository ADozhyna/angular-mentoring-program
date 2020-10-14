export interface ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: string;
    description: string;
    top: boolean
}

export class Course implements ICourse {
    public id: number;
    public title: string;
    public creationDate: string;
    public duration: string;
    public description: string;
    public top: boolean
    constructor(id: number, title: string, creationDate: string, duration: string, description: string, top: boolean) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
        this.top = top;
    }
}
