import MyPaginate from './Pagination.styled';

export const Pagination = ({ pageCount, onClick }) => {
  return (
    <>
      <MyPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
