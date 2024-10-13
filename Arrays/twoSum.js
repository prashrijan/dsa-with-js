// Two Sum Ugly Code

const twoSum = (nums, target) => {

    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }


    // let map = {}

    // for(let i = 0; i < nums.length; i++){
        
    //     let complement = target - nums[i]

    //     if(map.hasOwnProperty(complement)){
    //         return [map[complement], i]    
    //     }

    //     map[nums[i]] = i
    // }

    
}

console.log(twoSum([2, 7, 11, 15, 18, 39], 18));
