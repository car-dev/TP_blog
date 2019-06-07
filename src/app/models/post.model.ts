export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    created_at: string;

    constructor(title: string, content:string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date().toString();
    }
}