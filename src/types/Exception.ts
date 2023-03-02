class GramsError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "GramsError";
        Object.setPrototypeOf(this, GramsError.prototype);
    }
}