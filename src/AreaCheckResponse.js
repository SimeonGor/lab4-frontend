export class AreaCheckResponse {
    x;
    y;
    r;
    hit;
    workingTime;
    createdAt;

    constructor(json) {
        this.x = json.x;
        this.y = json.y;
        this.r = json.r;
        this.hit = json.hit;
        this.workingTime = json.workingTime;
        this.createdAt = json.createdAt;
    }
}