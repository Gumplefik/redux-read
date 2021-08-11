/*
 * @Author: maqq
 * @Date: 2021-08-11 10:01:43
 * @LastEditors: maqq
 * @LastEditTime: 2021-08-11 16:16:07
 * @Description: file content
 */
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  // reduce累加计算结果，经典的中间件执行方式，这个实现是同步的，异步的见axios中的实现
  // 需要注意的是形如   [a,b,c,d,e,f,g] 的中间件运行顺序是     a(b(c(d(e(f(g(...args)))))))
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
