import PropTypes from "prop-types";

const CocktailInfo = ({ title, tableData, className = "" }) => {
  return (
    <div
      className={`text-color-primary flex flex-col lg:static absolute right-10 bottom-2 sm:top-10 ${className}`}
    >
      <h3 className="font-tommaso text-4xl mt-10">{title}</h3>
      <div className="w-auto flex flex-col flex-wrap md:flex-nowrap">
        <table className={`border-separate w-full ${className}`}>
          <thead>
            <tr>
              {tableData.headers.map((header, index) => (
                <th key={index} className="font-normal text-start">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="md:flex md:justify-between md:w-full"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`${
                      rowIndex % 2 === 0 &&
                      rowIndex !== tableData.rows.length - 1
                        ? "border-b border-color-secondary pb-5 text-color-secondary"
                        : rowIndex === tableData.rows.length - 1
                        ? "text-color-secondary"
                        : ""
                    } ${cellIndex === 0 ? "min-w-[103px]" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CocktailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  tableData: PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  }).isRequired,
};

export default CocktailInfo;
