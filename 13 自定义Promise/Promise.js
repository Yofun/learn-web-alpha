(function (w) {
  const PENDING = "PENDING";
  const RESOLVED = "RESOLVED";
  const REJECTED = "REJECTED";

  function Promise(executor) {
    const self = this;
    self.status = PENDING;
    self.data = null;
    self.callbacks = [];

    function resolve(value) {
      if (self.status === PENDING) {
        self.status = RESOLVED;
        self.data = value;
        if (self.callbacks.length > 0) {
          setTimeout(() => {
            self.callbacks.forEach((v) => {
              v.onResolved(value);
            });
          }, 0);
        }
      }
    }

    function reject(reason) {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.data = reason;
        if (self.callbacks.length > 0) {
          self.callbacks.forEach((v) => {
            v.onRejected(reason);
          });
        }
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  /**
   * Promise.prototype.then
   */
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;

    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw new Error(reason);
          };

    return new Promise((resolve, reject) => {
      function solvePromise(callback) {
        try {
          const result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else if (
            result != null &&
            (typeof result === "object" || typeof result === "function")
          ) {
            const then = result.then;
            if (typeof then === "function") {
              then(resolve, reject);
            } else {
              resolve(then);
            }
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (self.status === RESOLVED) {
        setTimeout(() => {
          solvePromise(onResolved);
        }, 0);
      } else if (self.status === REJECTED) {
        setTimeout(() => {
          solvePromise(onRejected);
        }, 0);
      } else if (self.status === PENDING) {
        self.callbacks.push({
          onResolved(value) {
            solvePromise(onResolved);
          },
          onRejected(reason) {
            solvePromise(onRejected);
          },
        });
      }
    });
  };

  // 将Promise挂在到window对象上
  w.Promise = Promise;
})(window);
