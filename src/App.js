import './App.css';
import {GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group} from '@syncfusion/ej2-react-grids';
import data from './datasource.json';
function App() {
  return (
    <div style={{margin:'10%', marginTop:'5%'}}>
     <GridComponent dataSource={data} allowPaging={true}
     pageSettings={{pageSize:6}}
     
    allowFiltering={true} allowGrouping={true}>
      <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Invoice Number' textAlign='Right' width='100'/>
      <ColumnDirective field='CustomerID' headerText='CustomerID'  width='150'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country'  />
      <ColumnDirective field='ShipName' headerText='Ship Name'  />
      <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Filter, Group]}/>
      </GridComponent>
    </div>
  );
}

export default App;
