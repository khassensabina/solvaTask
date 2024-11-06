import Pagination from "react-bootstrap/Pagination";

type PaginationProps = {
    current: number,
    totalItems: number,
    onChangePage: (el: number) => void,
}

const ITEMS_PER_PAGE = 10;

export default function PaginationElement(props: PaginationProps) {
    const {current, totalItems, onChangePage} = props;
    const totalPages: number = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const pagesNums = Array.from({length: totalPages}, (_, i) => i + 1);

    const onPrevClick = () => {
        onChangePage(current - 1);
    }

    const onNumClick = (e: any) => {
        onChangePage(Number(e.target.innerHTML));
    }

    const onNextClick = () => {
        onChangePage(current + 1);
    }

    return (
        <div className="w-full flex justify-center">
            <Pagination>
                <Pagination.Prev disabled={(current == 1)} onClick={onPrevClick} />
                {pagesNums.map((num) => {
                    return <Pagination.Item active={(num == current)} onClick={onNumClick}>{num}</Pagination.Item>
                })}
                <Pagination.Next disabled={(current == totalPages)} onClick={onNextClick} />
            </Pagination>
        </div>
    );
}