type Executor<T> = (resolve: (value: T | Promise<T>) => void, reject: (reason?: any) => void) => void;

class MyPromise<T> {
    private onResolveCallbacks: Array<(value: T) => void> = [];
    private onRejectCallbacks: Array<(reason: any) => void> = [];
    private isResolved: boolean = false;
    private isRejected: boolean = false;
    private value: T | undefined;
    private reason: any;

    constructor(executor: Executor<T>) {
        const resolve = (value: T | Promise<T>) => {
            if (this.isResolved || this.isRejected) return;
            this.isResolved = true;
            this.value = value as T;
            this.onResolveCallbacks.forEach((callback) => callback(this.value!));
        };

        const reject = (reason: any) => {
            if (this.isResolved || this.isRejected) return;
            this.isRejected = true;
            this.reason = reason;
            this.onRejectCallbacks.forEach((callback) => callback(this.reason));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled: (value: T) => any, onRejected?: (reason: any) => any): MyPromise<any> {
        return new MyPromise((resolve, reject) => {
            const handleResolve = () => {
                try {
                    const result = onFulfilled(this.value!);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };

            const handleReject = () => {
                if (onRejected) {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    reject(this.reason);
                }
            };

            if (this.isResolved) {
                handleResolve();
            } else if (this.isRejected) {
                handleReject();
            } else {
                this.onResolveCallbacks.push(handleResolve);
                this.onRejectCallbacks.push(handleReject);
            }
        });
    }

    catch(onRejected: (reason: any) => any): MyPromise<any> {
        return this.then(undefined, onRejected);
    }

    finally(onFinally: () => void): MyPromise<T> {
        return this.then(
            (value) => {
                onFinally();
                return value;
            },
            (reason) => {
                onFinally();
                throw reason;
            }
        );
    }
}

// 使用示例
const promise = new MyPromise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("成功");
        // reject("失败"); // 可以取消注释来测试失败情况
    }, 1000);
});

promise
    .then((result) => {
        console.log(result); // 输出: 成功
        return "继续处理";
    })
    .then((result) => {
        console.log(result); // 输出: 继续处理
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("操作完成");
    });
