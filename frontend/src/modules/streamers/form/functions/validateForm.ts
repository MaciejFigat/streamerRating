export const validateUrl = (url: string): string => {
  let urlObject

  if (!url) {
    return 'URL is necessary.'
  }
  if (url.length < 10) {
    return 'URL is too short.'
  }

  try {
    urlObject = new URL(url)
  } catch (_) {
    return 'Invalid URL.'
  }

  if (urlObject.protocol !== 'http:' && urlObject.protocol !== 'https:') {
    return 'URL must be http or https.'
  }

  return ''
}
export const validateName = (name: string): string => {
  if (!name) {
    return 'Name is necessary.'
  } else if (name.length < 2) {
    return 'The name must be at least 2 characters long.'
  } else if (name.length > 60) {
    return 'That is a long name!'
  } else {
    return ''
  }
}
export const validateDescription = (desctription: string): string => {
  if (!desctription) {
    return 'Description is necessary.'
  } else if (desctription.length < 3) {
    return 'Please elaborate, 3 characters at least.'
  } else if (desctription.length > 100) {
    return 'Consider the attention span. Too many characters.'
  } else {
    return ''
  }
}
