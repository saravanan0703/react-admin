import React, { Component } from "react";
import { Card, Col, Row } from 'antd';

import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AjaxMd from './markdown/ajax.md';
import BorderedMd from './markdown/bordered.md';
import ColspanRowspanMd from './markdown/colspan-rowspan.md';
import CustomFilterPanelMd from './markdown/custom-filter-panel.md';
import DragSortingMd from './markdown/drag-sorting.md';
import DynamicSettingsMd from './markdown/dynamic-settings.md';
import EditCellMd from './markdown/edit-cell.md';
import EditRowMd from './markdown/edit-row.md';
import EllipsisMd from './markdown/ellipsis.md';
import ExpandChildrenMd from './markdown/expand-children.md';
import ExpandMd from './markdown/expand.md';
import FixedColumnsHeaderMd from './markdown/fixed-columns-header.md';
import FixedColumnsMd from './markdown/fixed-columns.md';
import FixedHeaderMd from './markdown/fixed-header.md';
import GroupingColumnsMd from './markdown/grouping-columns.md';
import HeadMd from './markdown/head.md';
import JsxMd from './markdown/jsx.md';
import MultipleSorterMd from './markdown/multiple-sorter.md';
import NestedTableMd from './markdown/nested-table.md';
import ResetFilterMd from './markdown/reset-filter.md';
import ResizableColumnMd from './markdown/resizable-column.md';
import RowSelectionAndOperationMd from './markdown/row-selection-and-operation.md';
import RowSelectionCustomMd from './markdown/row-selection-custom.md';
import RowSelectionMd from './markdown/row-selection.md';
import SizeMd from './markdown/size.md';
import SummaryMd from './markdown/summary.md';
import VirtualListMd from './markdown/virtual-list.md';
import Basic from './Basic';
import Ajax from './Ajax';
import Bordered from './Bordered';
import ColspanRowspan from './ColspanRowspan';
import CustomFilterPanel from './CustomFilterPanel';
import DragSorting from './DragSorting';
import DynamicSettings from './DynamicSettings';
import EditCell from './EditCell';
import EditRow from './EditRow';
import Ellipsis from './Ellipsis';
import ExpandChildren from './ExpandChildren';
import Expand from './Expand';
import FixedColumnsHeader from './FixedColumnsHeader';
import FixedColumns from './FixedColumns';
import FixedHeader from './FixedHeader';
import GroupingColumns from './GroupingColumns';
import Head from './Head';
import Jsx from './Jsx';
import MultipleSorter from './MultipleSorter';
import NestedTable from './NestedTable';
import ResetFilter from './ResetFilter';
import ResizableColumn from './ResizableColumn';
import RowSelectionAndOperation from './RowSelectionAndOperation';
import RowSelectionCustom from './RowSelectionCustom';
import RowSelection from './RowSelection';
import Size from './Size';
import Summary from './Summary';
import VirtualList from './VirtualList';
//import BasicTableAdd from "./BasicTableAdd";

export class TableComponent extends Component {
  render() {
    return (
      <div className="site-card-wrapper">
				<h3>My Users View</h3>
       <Card title="">
			 		<Basic />
				</Card> 
        <h3>Products View</h3>
        <Card title="">
          <Ajax />
        </Card> 
      
      </div>
    );
  }
}

export default TableComponent;
