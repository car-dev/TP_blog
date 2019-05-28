export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content:string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date();
    }

    like() {
        this.loveIts += 1;
    }

    unlike() {
        this.loveIts -=1;
    }
}