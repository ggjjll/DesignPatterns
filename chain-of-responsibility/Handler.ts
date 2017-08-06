import {Problem} from "./Problem";
/**
 * Created by onlyjyf on 8/5/17.
 */
export abstract class Handler {
    /**上一级处理者*/
    protected lastHandler:Handler;

    public setLastHandler(handler:Handler) {
        this.lastHandler = handler;
    }

    /**处理问题*/
    public handler(problem:Problem):boolean {
        if (problem.getLevel() > this.getMaxHandlerLevel()) {
            console.log(`我只能解决${this.getMaxHandlerLevel()}级以下的问题，我已将问题上报`);
            return this.lastHandler.handler(problem);
        }
        console.log('问题已经解决了');
        return true;
    }
    /**获取处理问题的最大能力值*/
    abstract getMaxHandlerLevel():number;
}