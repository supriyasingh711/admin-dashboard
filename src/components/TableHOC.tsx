import React from 'react'
import {
    AiOutlineSortAscending,
    AiOutlineSortDescending
} from "react-icons/ai";
import {
    useTable,
    Column,
    usePagination,
    useSortBy,
    UseTable,
    TableOptions,
} from "react-table"

function TableHOC<T extends Object>(
    columns:Column<T>[],
    data:T[],
    containerClassname:string,
    heading:string,
    showPagination:boolean=false
){
    return function HOC(){
        const options:TableOptions<T>={
            columns,
            data,initialState:{
                pageSize:6,

            },
        };
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
            nextPage,
            pageCount,
            state:{pageIndex},
            previousPage,
            canNextPage,
            canPreviousPage,
        }=useTable(options,useSortBy,usePagination);
        return(
            <div className={containerClassname}>
                <h2 className="heading">{heading}</h2>
                <table className='table' {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup)=>(
                                <tr {...headerGroup.getHeaderGroupProps()}></tr>
                            ))}
                        </thead>
                </table>
            </div>
        )
    }
}


export default TableHOC