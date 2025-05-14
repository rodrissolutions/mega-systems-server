import randomstring from 'randomstring'

const createCode = () => {
  const code = randomstring.generate({
    charset: 'numeric',
    length: 4,
  })
  return code
}

export default { createCode }
