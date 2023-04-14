/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-04-14 09:33:08
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-04-14 09:39:25
 * @FilePath: /笔试题/20230414/06.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]]]

const flatten = (nums) => nums.reduce((pre,cur) => Array.isArray(cur) ? [...pre,...flatten(cur)] : [...pre,cur],[]) 

const solution = (nums) => [...new Set(flatten(nums))].sort((a,b) => a - b)

console.log(solution(arr))