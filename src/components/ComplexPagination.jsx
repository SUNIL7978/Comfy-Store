import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePages = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPaginationButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePages(pageNumber)}
        className={`btn btn-xs md:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPagination = () => {
    const addButton = [];
    addButton.push(
      addPaginationButton({ pageNumber: 1, activeClass: page === 1 })
    );

    // dots
    if (page > 2) {
      addButton.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
          ...
        </button>
      );
    }

    if (page !== 1 || page !== pageCount) {
      addButton.push(
        addPaginationButton({ pageNumber: page, activeClass: true })
      );
    }
    if (page < pageCount - 1) {
      addButton.push(
        <button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
          ...
        </button>
      );
    }

    addButton.push(
      addPaginationButton({
        pageNumber: pageCount,
        activeClass: page === pageCount,
      })
    );
    return addButton;
  };

  if (pageCount < 2) return null;
  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs md:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePages(prevPage);
          }}
        >
          Prev
        </button>
        {renderPagination()}
        <button
          className='btn btn-xs md:btn-md join-item'
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePages(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
