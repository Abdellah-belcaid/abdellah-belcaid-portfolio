export function paginateItems(items, currentPage, itemsPerPage) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  return currentItems;
}

export function filterItems(items, tag, searchTerm, key = "title") {
  return items.filter(
    (item) =>
      (item?.tag.includes(tag) || tag === "All") &&
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
  );
}
