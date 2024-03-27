export const sortingFuction = (data, k) => {
  if (k === "page") {
    return data.sort((a, b) => b.totalPages - a.totalPages);
  }
  if (k === "rating") {
    return data.sort((a, b) => b.rating - a.rating);
  }
  if (k === "publisher") {
    return data.sort((a, b) =>
      a.publisher < b.publisher ? 1 : a.publisher > b.publisher ? -1 : 0
    );
  }
};
