function arrToString(arr) { 
    return new Promise((resolve, reject) => {
		if (!Array.isArray(arr)) {
			reject(new Error('Это не массив'));
		}
        let final = []
        let middle = []
        let i = 0

        for( key in arr ) {
            if((arr[key-1]) != (arr[key]-1))
                i++;
            if(!middle[i])
                middle[i] = [];
                middle[i].push(arr[key]);
        }

        middle.forEach( value => {
                if(value.length > 2) {
                    let start = value[0]
                    let end = value[value.length - 1]
                    let mid =[]
    
                    mid.push(start, end)
                    final.push([start, end].join('-'))
                } else {
                    final.push(value.join(','))
                }
                return final.join(',')
        })
        
        resolve(final.toString())
    });
}

module.exports = arrToString;
