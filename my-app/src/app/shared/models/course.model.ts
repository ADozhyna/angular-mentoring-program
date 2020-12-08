export interface ICourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: any;
    isTopRated: boolean;
}

export class Course implements ICourse {
    public id: number;
    public name: string;
    public date: string;
    public length: number;
    public description: string;
    public isTopRated: boolean;
    public authors: any;
    constructor(id: number, name: string, date: string, length: number, description: string, isTopRated: boolean, authors: any) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.length = length;
        this.description = description;
        this.isTopRated = isTopRated;
    }
}
