const digits: string = '零壹贰叁肆伍陆柒捌玖'
const units: string[] = ['', '拾', '佰', '仟', '万']

export function amountToChinese(num: number): string {
  const str = num.toString()
  let result = ''

  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str[i])
    const unit = units[str.length - i - 1]

    result += digits[digit] + unit
  }

  return result.replace(/零(拾|佰|仟)/g, '零').replace(/零+/g, '零').replace(/零$/, '').replace(/^$/, '零')
}

