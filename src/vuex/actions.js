/**
 * Created by zyy on 2017/3/30.
 */


// 这个 getHeaderTitle 函数会返回 headerTitle 的值
// 在 ES6 里你可以写成：
// export const getHeaderTitle = state => state.headerTitle;

export function getHeaderTitle (state) {
  return state.headerTitle;
};
