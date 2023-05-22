function longestIncreasingSubsequence (nums) {

  console.log(nums)
  const sequences = [];
  let longest = -Infinity

  for(const num of nums){
    sequences.push([num])
    // [[3], [10], [3, 10], [4], [3, 4], ... , [3, 4]]
    //                           ^----^
    // 4
    for(const seq of sequences){
      if(num>seq[seq.length-1]){
        let newSequence = seq.concat(num)// [3, 10]
        sequences.push(newSequence)
        if(newSequence.length > longest){
          longest = newSequence.length
        }
      }
    }
  }  
  return longest
}

module.exports = longestIncreasingSubsequence

console.log(longestIncreasingSubsequence([3, 10, 4, 5]))//(3)
// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]))//(3)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]))//(6)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]))//(9)
