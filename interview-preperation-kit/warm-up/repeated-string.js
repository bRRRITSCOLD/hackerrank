function repeatedString(s, n) {
	if (!s.includes('a')) {
		return 0
	}
	else if (s.length === 1) {
		return n
	}
	else {
		const countTheAs = string => {
			let aCount = 0
			for (let i = 0; i < string.length; i++) {
				if (s[i] === 'a') {
					aCount++
				}
			} 
			return aCount
		}
		let multiplier = Math.floor(n / s.length)
		let excess = n % s.length
		let aCount = countTheAs(s)
		let aCountExcess = 0
		if (excess > 0) {
			let excessString = s.slice(0, excess)
			aCountExcess = countTheAs(excessString)
		}
		return aCount * multiplier + aCountExcess
	}
}

const resultOne = repeatedString('aba', 10)
const resultTwo = repeatedString('a', 1000000000000)
console.log(resultOne)