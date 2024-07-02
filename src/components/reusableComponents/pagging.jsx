import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, handlePage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount <= 1) return null;
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              onClick={() => handlePage(page)}
              className={currentPage == page ? "page-item active" : "page-item"}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePage:PropTypes.func
};
export default Pagination;
