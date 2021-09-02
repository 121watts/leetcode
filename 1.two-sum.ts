/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
	const table = {}
	nums.forEach((n, i) => {
		table[n] = i
	})

	for (let i = 0; i < nums.length; i++) {
		const compliment = target - nums[i]
		if (table.hasOwnProperty(compliment) && table[compliment] !== i) {
			return [table[compliment], i]
		}
	}
};
// @lc code=end
