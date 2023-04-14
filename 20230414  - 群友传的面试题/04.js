/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-04-14 09:26:56
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-04-14 09:31:42
 * @FilePath: /笔试题/20230414/04.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const nums = [1,2,3,[4,[5,6]],7]

function flatten (arr) {
    const result = []
    const stack = [...arr]
    while(stack.length) {
        const next = stack.pop()
        if(Array.isArray(next)) {
            stack.push(...next)
        } else result.unshift(next)
    }
    return result
}

console.log(flatten(nums))