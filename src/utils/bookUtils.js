function isBookValid(book, filters) {
  if (filters == null) {
    return true;
  } else {
    if (
      filters.title &&
      book.title.toLowerCase().includes(filters.title.toLowerCase())
    )
      return true;
    else if (
      filters.author &&
      book.authors[0].toLowerCase().includes(filters.author.toLowerCase())
    )
      return true;

    if (filters.minYear && filters.maxYear) {
      if (
        book.publishedDate < filters.maxYear &&
        book.publishedDate > filters.minYear
      )
        return true;
    } else if (filters.minYear && !filters.maxYear) {
      if (book.publishedDate > filters.minYear) return true;
    } else if (filters.maxYear && !filters.minYear) {
      if (book.publishedDate < filters.maxYear) return true;
    }
  }

  return false;
}

function isValidFilter(filters) {
  for (const [key, value] of Object.entries(filters)) {
    if (value !== "") return true;
  }
}

export { isBookValid, isValidFilter };
